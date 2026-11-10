export type ChartStatus = "loading" | "ready";

/** Loading animation style: the default traveling pulse, or a diagonal
 * shimmer that sweeps across the skeleton. */
export type LoadingStyle = "pulse" | "sweep";

/**
 * Visual lifecycle phase of a time-series chart. `status` is what the caller
 * asks for; the phase is where the animation actually is. Every transition
 * lives in {@link transitionChartPhase} — read that table before adding a
 * phase or a `chartPhase === …` check.
 *
 * ```
 * from              event                    to
 * loading           status → ready           exiting
 * exiting           loadingPulseComplete     gridTweenReady
 * gridTweenReady    yDomainTweenComplete     revealing
 * revealing         revealComplete           ready
 * ready             enterReveal              revealing
 * ready             status → loading         exitingReady
 * exitingReady      revealConcealComplete    gridTweenLoading
 * gridTweenLoading  yDomainTweenComplete     loading
 * ```
 *
 * A status change applies from any phase and interrupts what is in flight.
 * With animation off, `exiting` / `exitingReady` are skipped; with the Y tween
 * also off, the grid tween phases are skipped too.
 *
 * `revealingLoading` is reserved for a loading enter animation. No transition
 * enters it yet; consumers handle it so adding one is a one-line change.
 */
export type ChartPhase =
  | "loading"
  | "exiting"
  | "gridTweenReady"
  | "revealing"
  | "ready"
  | "exitingReady"
  | "gridTweenLoading"
  | "revealingLoading";

export const DEFAULT_CHART_STATUS: ChartStatus = "ready";

/** Default Y-domain tween when transitioning loading ↔ ready (ms). */
export const DEFAULT_Y_DOMAIN_TWEEN_MS = 500;

/** Relative domain delta below which Y tween may be skipped (see plan). */
export const Y_DOMAIN_TWEEN_SKIP_THRESHOLD = 0.02;

/** Resting phase for a given status before transition orchestration runs. */
export function resolveRestingChartPhase(status: ChartStatus): ChartPhase {
  return status === "loading" ? "loading" : "ready";
}

/** Events that move a chart between phases. */
export type ChartPhaseEvent =
  /** The `status` prop changed. */
  | {
      type: "statusChanged";
      status: ChartStatus;
      /** `animationDuration > 0`: play the series exit before the grid tween. */
      animate: boolean;
      /** `yDomainTweenDuration > 0`: tween the grid between skeleton and target. */
      tweenYDomain: boolean;
    }
  /** Mount or `revealSignature` change: replay the clip reveal. */
  | { type: "enterReveal" }
  /** The loading pulse finished exiting. */
  | { type: "loadingPulseComplete" }
  /** The ready series finished concealing. */
  | { type: "revealConcealComplete" }
  /** The grid finished tweening its Y domain. */
  | { type: "yDomainTweenComplete" }
  /** The clip reveal finished. */
  | { type: "revealComplete" };

/**
 * The chart lifecycle as one pure function. Returns `phase` unchanged when the
 * event does not apply, so late animation callbacks are harmless no-ops.
 */
export function transitionChartPhase(
  phase: ChartPhase,
  event: ChartPhaseEvent
): ChartPhase {
  switch (event.type) {
    case "statusChanged":
      // A status change interrupts whatever is in flight.
      if (event.status === "ready") {
        if (event.animate) return "exiting";
        return event.tweenYDomain ? "gridTweenReady" : "revealing";
      }
      if (event.animate) return "exitingReady";
      return event.tweenYDomain ? "gridTweenLoading" : "loading";
    case "enterReveal":
      return phase === "ready" ? "revealing" : phase;
    case "loadingPulseComplete":
      return phase === "exiting" ? "gridTweenReady" : phase;
    case "revealConcealComplete":
      return phase === "exitingReady" ? "gridTweenLoading" : phase;
    case "yDomainTweenComplete":
      if (phase === "gridTweenLoading") return "loading";
      if (phase === "gridTweenReady") return "revealing";
      return phase;
    case "revealComplete":
      return phase === "revealing" ? "ready" : phase;
    default:
      return phase;
  }
}

export function isChartInteractionPhase(phase: ChartPhase): boolean {
  return phase === "ready";
}

export const DEFAULT_CHART_LIFECYCLE = {
  chartPhase: "ready",
  chartStatus: "ready",
  loadingLabel: undefined,
  yDomainTweenDuration: DEFAULT_Y_DOMAIN_TWEEN_MS,
  yDomainSkeletonByAxis: { left: [0, 100] as [number, number] },
  yDomainTargetByAxis: { left: [0, 100] as [number, number] },
} as const satisfies {
  chartPhase: ChartPhase;
  chartStatus: ChartStatus;
  loadingLabel: undefined;
  yDomainTweenDuration: number;
  yDomainSkeletonByAxis: Record<string, [number, number]>;
  yDomainTargetByAxis: Record<string, [number, number]>;
};
