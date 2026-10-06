import { Plus } from "lucide-react";
import { CopyButton } from "@/components/design-system/copy-button";
import {
  Lead,
  PageHeader,
  Section,
  TextLink,
} from "@/components/design-system/layout";
import { colors } from "@/lib/design-system";

export const metadata = { title: "Foundations" };

const semanticColors = [
  { name: "Success", token: "success", description: "Complete, connected, in sync." },
  { name: "Warning", token: "warning", description: "Attention needed, still in progress." },
  { name: "Error", token: "destructive", description: "Something needs to be resolved." },
  { name: "Information", token: "info", description: "Helpful context and data." },
];

const typeScale = [
  { name: "Display", spec: "48–72 / 600 / −0.06em", className: "type-display", sample: "Every detail matters.", usage: "One per page. The main statement." },
  { name: "Heading", spec: "36 / 500 / −0.025em", className: "type-heading", sample: "Built to be used.", usage: "Section titles in the left column." },
  { name: "Lead", spec: "26 / 500 / −0.025em", className: "type-lead", sample: "Your calendar, always current.", usage: "Opening statement of a section." },
  { name: "Title", spec: "20 / 500", className: "type-title", sample: "Pick a team to get started", usage: "Cards, dialogs, and list items." },
  { name: "Body", spec: "16 / 400 / 1.6", className: "type-body", sample: "Pick a team and subscribe in the calendar app you already use.", usage: "Page descriptions and questions. 14px inside panels." },
  { name: "Caption", spec: "12 / 400", className: "type-caption", sample: "Updated just now", usage: "Fine print and metadata." },
];

const shapes = [
  { name: "Control", radius: "8px", token: "rounded-lg", description: "Buttons, inputs, small surfaces." },
  { name: "Panel", radius: "12px", token: "rounded-xl", description: "Cards, dialogs, grouped content." },
  { name: "Feature", radius: "16px", token: "rounded-2xl", description: "Showcase surfaces and demos." },
  { name: "Pill", radius: "999px", token: "rounded-full", description: "Primary actions, search, and icon buttons." },
];

const motion = [
  { name: "150ms", description: "Hover and focus color. Quick enough to feel immediate." },
  { name: "200ms", description: "Icon turns and small state changes." },
  { name: "250ms", description: "Disclosure height and opacity, where the browser supports it." },
  { name: "Reduced motion", description: "Honor the preference. Transitions become instant." },
];

const patterns = [
  { name: "Page header", code: "<PageHeader>", description: "Display title and 18px muted description over a masked dot field. One per page." },
  { name: "Section", code: "<Section>", description: "Heading in a 0.7fr column, content in 1.3fr, 128px of vertical rhythm, and a single rule between sections. Stacks below 768px." },
  { name: "Lead", code: "<Lead strong=…>", description: "Open a section with one strong sentence in foreground, then let the rest fall back to muted. Follow with 14px body text." },
  { name: "Disclosure", code: "<details className=\"ds-disclosure\">", description: "Native details and summary. The plus turns 45° when open, and the answer eases in. This list is one." },
];

export default function FoundationsPage() {
  return (
    <>
      <PageHeader
        title="Foundations"
        description="Color, type, spacing, shape, motion, and the page patterns behind my projects."
      />

      <Section id="color" title="Color">
        <Lead strong="Black sets the stage.">
          Surfaces add depth, borders add structure, and color earns its place
          by meaning something.
        </Lead>
        <div className="color-grid">
          {colors.map((c) => (
            <article key={c.token} className="color-swatch">
              <div className="swatch-fill" style={{ background: `var(--${c.token})` }}>
                <CopyButton text={`var(--${c.token})`} label={`Copy ${c.name} token`} compact />
              </div>
              <div className="swatch-info">
                <h3>{c.name}</h3>
                <code>--{c.token}</code>
                <p>{c.description}</p>
              </div>
            </article>
          ))}
        </div>
        <ul className="semantic-colors">
          {semanticColors.map((c) => (
            <li key={c.token}>
              <i style={{ background: `var(--${c.token})` }} />
              <div>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
              <CopyButton text={`var(--${c.token})`} label={`Copy ${c.name} token`} compact />
            </li>
          ))}
        </ul>
        <p className="ds-note">
          Use semantic tokens like <code>bg-card</code>,{" "}
          <code>text-muted-foreground</code>, and <code>border-border</code>.
          They follow your system theme. Keep literal colors out of component
          markup; the one exception is a brand color that identifies something,
          like a team.
        </p>
      </Section>

      <Section id="typography" title="Typography">
        <Lead strong="Geist carries everything.">
          A display that leans in, quiet medium-weight headings, and muted text
          for anything supporting.
        </Lead>
        <div className="type-scale">
          {typeScale.map((t) => (
            <div key={t.name} className="type-row">
              <div className="type-row-meta">
                <strong>{t.name}</strong>
                <code>{t.spec}</code>
              </div>
              <p className={t.className}>{t.sample}</p>
              <p className="type-row-usage">{t.usage}</p>
            </div>
          ))}
        </div>
        <div className="mono-specimen">
          <div>
            <strong>Geist Mono</strong>
            <p>Code, tokens, and measurements. Use tabular numbers for data.</p>
          </div>
          <code>
            const clarity = details.reduce(noise);
            <br />
            0123456789&nbsp; 96.8%&nbsp; #ededed
          </code>
        </div>
      </Section>

      <Section id="spacing" title="Spacing">
        <Lead strong="A 4px base.">
          Compact inside a group, generous between ideas.
        </Lead>
        <div className="spacing-scale">
          {[4, 8, 12, 16, 24, 32, 48, 64].map((n) => (
            <div key={n}>
              <span className="spacing-bar" style={{ height: n }} />
              <code>{n}</code>
            </div>
          ))}
        </div>
        <dl className="ds-rows">
          <div>
            <dt>Inside a control</dt>
            <dd>8–12px between an icon, label, and edge.</dd>
          </div>
          <div>
            <dt>Inside a panel</dt>
            <dd>16–32px to keep related information together.</dd>
          </div>
          <div>
            <dt>Between sections</dt>
            <dd>96–128px, with a single border rule. Each idea gets room.</dd>
          </div>
          <div>
            <dt>Page width</dt>
            <dd>1280px max, 24px gutters, 16px on phones.</dd>
          </div>
        </dl>
      </Section>

      <Section id="shape" title="Shape">
        <Lead strong="Soft edges, fine borders.">
          Elevation comes from the surface and a strong border, not from
          shadows.
        </Lead>
        <div className="shape-grid">
          {shapes.map((s) => (
            <div key={s.name}>
              <div className="shape-example" style={{ borderRadius: s.radius }}>
                <span>{s.radius}</span>
              </div>
              <h3>
                {s.name} <code>{s.token}</code>
              </h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="motion" title="Motion">
        <Lead strong="Respond to an action.">
          Motion confirms what changed. Nothing moves on its own.
        </Lead>
        <dl className="ds-rows">
          {motion.map((m) => (
            <div key={m.name}>
              <dt>{m.name}</dt>
              <dd>{m.description}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="patterns" title="Patterns">
        <Lead strong="Pages are built from a few pieces.">
          Every page on this site uses them. They come from the SportsCal
          landing page.
        </Lead>
        <div className="pattern-demo">
          <div className="ds-actions">
            <span className="ds-pill">
              Primary action <kbd>⌘K</kbd>
            </span>
            <span className="ds-pill is-ghost">Secondary</span>
          </div>
          <TextLink href="https://sportscal.site">See it on SportsCal</TextLink>
        </div>
        <div className="ds-disclosures">
          {patterns.map((p) => (
            <details key={p.name} className="ds-disclosure">
              <summary>
                {p.name}
                <Plus aria-hidden="true" />
              </summary>
              <div className="ds-disclosure-body">
                <p>{p.description}</p>
                <code>{p.code}</code>
              </div>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
