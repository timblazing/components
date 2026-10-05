import { PageHeading } from "@/components/design-system/page-heading";
import { CopyButton } from "@/components/design-system/copy-button";
import { colors } from "@/lib/design-system";
export const metadata = { title: "Foundations" };
export default function FoundationsPage() {
  return (
    <div className="ds-content">
      <PageHeading
        title="Foundations"
        description="The design system for my projects."
      />
      <nav className="foundation-nav" aria-label="Foundation sections">
        {["Color", "Typography", "Spacing", "Shape", "Motion"].map((s) => (
          <a key={s} href={`#${s.toLowerCase()}`}>
            {s}
          </a>
        ))}
      </nav>
      <section id="color" className="foundation-section">
        <div className="foundation-section-heading">
          <h2>Color</h2>
          <p>
            Black sets the stage. Surfaces add depth. Color earns its place.
          </p>
        </div>
        <div className="color-grid">
          {colors.map((c) => (
            <article key={c.token} className="color-swatch">
              <div className="swatch-fill" style={{ background: c.value }}>
                <CopyButton
                  text={`var(--${c.token})`}
                  label={`Copy ${c.name} token`}
                  compact
                />
              </div>
              <div className="swatch-info">
                <h3>{c.name}</h3>
                <code>{c.value}</code>
                <span>--{c.token}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="foundation-caption">
          The dark palette. Appearance follows your system theme.
        </p>
        <div className="semantic-colors">
          {[
            {
              name: "Success",
              token: "success",
              description: "Complete, connected, in sync.",
            },
            {
              name: "Warning",
              token: "warning",
              description: "Attention needed, still in progress.",
            },
            {
              name: "Error",
              token: "destructive",
              description: "Something needs to be resolved.",
            },
            {
              name: "Information",
              token: "info",
              description: "Helpful context and data.",
            },
          ].map((c) => (
            <div key={c.token}>
              <i style={{ background: `var(--${c.token})` }} />
              <div>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
              <CopyButton
                text={`var(--${c.token})`}
                label={`Copy ${c.name} token`}
                compact
              />
            </div>
          ))}
        </div>
        <div className="foundation-rule">
          <strong>Use semantic tokens.</strong>
          <p>
            <code>bg-card</code>, <code>text-muted-foreground</code>, and{" "}
            <code>border-border</code> adapt to appearance. Keep literal colors
            out of component markup.
          </p>
        </div>
      </section>
      <section id="typography" className="foundation-section">
        <div className="foundation-section-heading">
          <h2>Typography</h2>
          <p>
            Geist carries the interface. Scale and weight do the heavy lifting.
          </p>
        </div>
        <div className="type-showcase">
          <div className="type-character">
            Aa<span>Geist Sans</span>
          </div>
          <div className="type-alphabet">
            <p>
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789
            </p>
            <span>A single family. A clear hierarchy.</span>
          </div>
        </div>
        <div className="type-scale">
          {[
            {
              name: "Display",
              sample: "Every detail matters.",
              size: "64",
              weight: "600",
              className: "type-display",
              usage: "A page’s main statement.",
            },
            {
              name: "Heading",
              sample: "Built to be used.",
              size: "32",
              weight: "600",
              className: "type-heading",
              usage: "Sections and destinations.",
            },
            {
              name: "Title",
              sample: "Your calendar, always current.",
              size: "20",
              weight: "500",
              className: "type-title",
              usage: "Cards and focused tasks.",
            },
            {
              name: "Body",
              sample:
                "Pick a team and subscribe in the calendar app you already use.",
              size: "14",
              weight: "400",
              className: "type-body",
              usage: "Everyday reading.",
            },
            {
              name: "Caption",
              sample: "Updated just now",
              size: "12",
              weight: "400",
              className: "type-caption",
              usage: "Supporting context.",
            },
          ].map((t) => (
            <div key={t.name} className="type-row">
              <div>
                <strong>{t.name}</strong>
                <code>
                  {t.size}px / {t.weight}
                </code>
              </div>
              <p className={t.className}>{t.sample}</p>
            </div>
          ))}
        </div>
        <div className="mono-specimen">
          <div>
            <strong>Geist Mono</strong>
            <p>Code, measurements, and numeric data.</p>
          </div>
          <code>
            const clarity = details.reduce(noise);
            <br />
            0123456789&nbsp; 96.8%&nbsp; #ededed
          </code>
        </div>
      </section>
      <section id="spacing" className="foundation-section">
        <div className="foundation-section-heading">
          <h2>Spacing</h2>
          <p>A 4px base. Compact within groups, generous between ideas.</p>
        </div>
        <div className="spacing-scale">
          {[4, 8, 12, 16, 24, 32, 48, 64].map((n) => (
            <div key={n}>
              <span className="spacing-bar" style={{ height: n }} />
              <code>{n}</code>
              <span>px</span>
            </div>
          ))}
        </div>
        <div className="foundation-guidelines">
          <div>
            <h3>Inside a control</h3>
            <p>8–12px between an icon, label, and edge.</p>
          </div>
          <div>
            <h3>Inside a panel</h3>
            <p>16–24px to keep related information together.</p>
          </div>
          <div>
            <h3>Between sections</h3>
            <p>48–64px so each idea has room to breathe.</p>
          </div>
        </div>
      </section>
      <section id="shape" className="foundation-section">
        <div className="foundation-section-heading">
          <h2>Shape</h2>
          <p>Soft edges. Fine borders. Elevation comes from the surface.</p>
        </div>
        <div className="shape-grid">
          {[
            {
              name: "Control",
              radius: "8px",
              token: "rounded-lg",
              description: "Buttons, inputs, small surfaces.",
            },
            {
              name: "Panel",
              radius: "12px",
              token: "rounded-[12px]",
              description: "Cards, dialogs, grouped content.",
            },
            {
              name: "Pill",
              radius: "999px",
              token: "rounded-full",
              description: "Chips and compact landing CTAs.",
            },
          ].map((s) => (
            <div key={s.name}>
              <div className="shape-example" style={{ borderRadius: s.radius }}>
                <span>{s.radius}</span>
              </div>
              <h3>{s.name}</h3>
              <code>{s.token}</code>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="motion" className="foundation-section">
        <div className="foundation-section-heading">
          <h2>Motion</h2>
          <p>Respond to an action. Help explain what changed.</p>
        </div>
        <div className="foundation-guidelines">
          <div>
            <h3>150ms</h3>
            <p>Hover and focus. Quick enough to feel immediate.</p>
          </div>
          <div>
            <h3>200ms</h3>
            <p>Tabs, disclosure, and small state changes.</p>
          </div>
          <div>
            <h3>Reduced motion</h3>
            <p>Honor the preference. No decorative loops or page entrances.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
