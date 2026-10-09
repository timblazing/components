import { CopyButton } from "@/components/design-system/copy-button";
import { PageHeader, Section } from "@/components/design-system/layout";
import { DesignFilesSection } from "@/components/design-system/design-files-section";
import { colors } from "@/lib/design-system";

export const metadata = { title: "Foundations" };

const typeScale = [
  { name: "Display", spec: "DM Sans · 48–72 / 500 / −0.05em", className: "type-display", sample: "Lorem ipsum dolor." },
  { name: "Heading", spec: "SF Pro · 36 / 500 / −0.04em", className: "type-heading", sample: "Lorem ipsum dolor sit." },
  { name: "Lead", spec: "SF Pro · 26 / 500 / −0.025em", className: "type-lead", sample: "Lorem ipsum dolor sit amet." },
  { name: "Title", spec: "SF Pro · 20 / 500", className: "type-title", sample: "Lorem ipsum dolor sit amet" },
  { name: "Body", spec: "SF Pro · 16 / 400 / 1.6", className: "type-body", sample: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." },
  { name: "Caption", spec: "SF Pro · 12 / 400", className: "type-caption", sample: "Lorem ipsum dolor" },
  { name: "Mono", spec: "Menlo · 13 / 400 / tabular", className: "type-mono", sample: "0123456789  96.8%  #ededed" },
];

const layout = [
  { name: "Control padding", value: "8–12px" },
  { name: "Panel padding", value: "16–32px" },
  { name: "Section spacing", value: "96px, 72px on phones" },
  { name: "Container", value: "1288px max, 1240px content" },
  { name: "Gutter", value: "24px, 16px on phones" },
  { name: "Header", value: "60px" },
];

const elevation = [
  { name: "Shadows", value: "None" },
  { name: "Layers", value: "--background → --card → --muted" },
  { name: "Rules", value: "1px --border" },
  { name: "Decoration", value: "Masked dot field" },
];

const shapes = [
  { name: "Control", radius: "8px", token: "rounded-lg" },
  { name: "Panel", radius: "12px", token: "rounded-xl" },
  { name: "Feature", radius: "16px", token: "rounded-2xl" },
  { name: "Pill", radius: "999px", token: "rounded-full" },
];

const motion = [
  { name: "Hover, focus", value: "150ms" },
  { name: "State change", value: "200ms" },
  { name: "Disclosure", value: "250ms" },
  { name: "Reduced motion", value: "Instant" },
];

function Rows({ items, code = false }: { items: { name: string; value: string }[]; code?: boolean }) {
  return (
    <dl className="ds-rows">
      {items.map((item) => (
        <div key={`${item.name}-${item.value}`}>
          <dt>{item.name}</dt>
          <dd>{code ? <code>{item.value}</code> : item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function FoundationsPage() {
  return (
    <>
      <PageHeader
        title="Foundations"
        description="A monochrome workshop: near-black canvas, hairline rules, tight geometric type."
      />

      <Section id="colors" title="Colors">
        <div className="color-grid">
          {colors.map((c) => (
            <article key={c.token} className="color-swatch">
              <div className="swatch-fill" style={{ background: `var(--${c.token})` }}>
                <CopyButton text={`var(--${c.token})`} label={`Copy ${c.name} token`} compact />
              </div>
              <div className="swatch-info">
                <h3>{c.name}</h3>
                <code>--{c.token}</code>
                <dl className="swatch-values">
                  <div>
                    <dt>Dark</dt>
                    <dd>{c.dark}</dd>
                  </div>
                  <div>
                    <dt>Light</dt>
                    <dd>{c.light}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="typography" title="Typography">
        <div className="type-scale">
          {typeScale.map((t) => (
            <div key={t.name} className="type-row">
              <div className="type-row-meta">
                <strong>{t.name}</strong>
                <code>{t.spec}</code>
              </div>
              <p className={t.className}>{t.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="layout" title="Layout">
        <div className="spacing-scale">
          {[4, 8, 12, 16, 24, 32, 48, 64].map((n) => (
            <div key={n}>
              <span className="spacing-bar" style={{ height: n }} />
              <code>{n}</code>
            </div>
          ))}
        </div>
        <Rows items={layout} />
      </Section>

      <Section id="elevation" title="Elevation & Depth">
        <div className="elevation-demo" aria-hidden="true">
          <div>
            <div />
          </div>
        </div>
        <Rows items={elevation} code />
      </Section>

      <Section id="shapes" title="Shapes">
        <div className="shape-grid">
          {shapes.map((s) => (
            <div key={s.name}>
              <div className="shape-example" style={{ borderRadius: s.radius }}>
                <span>{s.radius}</span>
              </div>
              <h3>
                {s.name} <code>{s.token}</code>
              </h3>
            </div>
          ))}
        </div>
      </Section>

      <Section id="motion" title="Motion">
        <Rows items={motion} code />
      </Section>

      <Section id="files" title="Design files" stacked>
        <DesignFilesSection />
      </Section>
    </>
  );
}
