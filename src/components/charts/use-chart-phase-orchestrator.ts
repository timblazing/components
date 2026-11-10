"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  type ChartPhase,
  type ChartPhaseEvent,
  type ChartStatus,
  resolveRestingChartPhase,
  transitionChartPhase,
} from "./chart-phase";

export interface UseChartPhaseOrchestratorOptions {
  chartStatus: ChartStatus;
  targetData: Record<string, unknown>[];
  skeletonData: Record<string, unknown>[];
  animationDuration: number;
  yDomainTweenDuration: number;
  /** Signature of motion URL state — replays clip reveal in Studio. */
  revealSignature?: string;
  /** Skip mount/signature enter reveal (static docs previews). */
  skipEnterReveal?: boolean;
}

export function useChartPhaseOrchestrator({
  chartStatus,
  targetData,
  skeletonData,
  animationDuration,
  yDomainTweenDuration,
  revealSignature = "",
  skipEnterReveal = false,
}: UseChartPhaseOrchestratorOptions) {
  const [chartPhase, setChartPhase] = useState<ChartPhase>(() =>
    resolveRestingChartPhase(chartStatus)
  );
  const [plotData, setPlotData] = useState<Record<string, unknown>[]>(() =>
    chartStatus === "loading" ? skeletonData : targetData
  );
  const [revealEpoch, setRevealEpoch] = useState(0);
  const [concealEpoch, setConcealEpoch] = useState(0);
  const [isLoaded, setIsLoaded] = useState(() => chartStatus === "ready");
  const prevStatusRef = useRef(chartStatus);
  const phaseRef = useRef(chartPhase);
  phaseRef.current = chartPhase;

  /** Every phase change goes through the transition table in chart-phase.ts. */
  const dispatch = useCallback((event: ChartPhaseEvent) => {
    setChartPhase((phase) => transitionChartPhase(phase, event));
  }, []);

  useEffect(() => {
    const prevStatus = prevStatusRef.current;
    if (prevStatus === chartStatus) {
      return;
    }
    prevStatusRef.current = chartStatus;

    const animate = animationDuration > 0;
    const tweenYDomain = yDomainTweenDuration > 0;
    setIsLoaded(false);
    if (!(animate || tweenYDomain)) {
      // Nothing to animate: swap the data in the same render as the phase.
      setPlotData(chartStatus === "ready" ? targetData : skeletonData);
    }
    if (chartStatus === "loading" && animate) {
      setConcealEpoch((epoch) => epoch + 1);
    }
    dispatch({ type: "statusChanged", status: chartStatus, animate, tweenYDomain });
  }, [
    animationDuration,
    chartStatus,
    dispatch,
    skeletonData,
    targetData,
    yDomainTweenDuration,
  ]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: revealSignature replays enter
  useEffect(() => {
    if (skipEnterReveal) {
      return;
    }
    if (chartStatus !== "ready") {
      return;
    }
    if (phaseRef.current !== "ready") {
      return;
    }

    dispatch({ type: "enterReveal" });
    setIsLoaded(false);
  }, [animationDuration, chartStatus, dispatch, revealSignature, skipEnterReveal]);

  useEffect(() => {
    switch (chartPhase) {
      case "loading":
        if (chartStatus === "loading") {
          setPlotData(skeletonData);
        }
        break;
      case "exiting":
        setPlotData(skeletonData);
        break;
      case "exitingReady":
      case "gridTweenLoading":
      case "gridTweenReady":
      case "revealing":
      case "ready":
        setPlotData(targetData);
        break;
      default:
        break;
    }
  }, [chartPhase, chartStatus, skeletonData, targetData]);

  /** Loading pulse exit finished — tween grid to ready spacing next. */
  const notifyLoadingPulseComplete = useCallback(() => {
    dispatch({ type: "loadingPulseComplete" });
  }, [dispatch]);

  /** Ready series conceal finished — tween grid to loading spacing next. */
  const notifyRevealConcealComplete = useCallback(() => {
    dispatch({ type: "revealConcealComplete" });
  }, [dispatch]);

  /** Grid tween finished — enter the next resting phase. */
  const notifyYDomainTweenComplete = useCallback(() => {
    dispatch({ type: "yDomainTweenComplete" });
  }, [dispatch]);

  useEffect(() => {
    if (chartPhase !== "revealing") {
      return;
    }

    setRevealEpoch((epoch) => epoch + 1);
    const finishReveal = () => {
      dispatch({ type: "revealComplete" });
      setIsLoaded(true);
    };
    if (animationDuration <= 0) {
      finishReveal();
      return;
    }

    const timer = window.setTimeout(finishReveal, animationDuration);
    return () => window.clearTimeout(timer);
  }, [animationDuration, chartPhase, dispatch]);

  return {
    chartPhase,
    plotData,
    revealEpoch,
    concealEpoch,
    isLoaded,
    notifyLoadingPulseComplete,
    notifyRevealConcealComplete,
    notifyYDomainTweenComplete,
  };
}
