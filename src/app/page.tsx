import Link from "next/link";

export default function HomePage() {
  return (
    <section className="ds-hero">
      <div aria-hidden="true" className="ds-page-header-field" />
      <div className="ds-container ds-hero-inner">
        <h1>My personal design system.</h1>
        <p>
          The foundations, components, and blocks behind my projects, in one
          place and ready to take.
        </p>
        <div className="ds-actions">
          <Link href="/foundations" className="ds-button">
            Read the foundations
          </Link>
          <Link href="/blocks" className="ds-button is-ghost">
            Browse blocks
          </Link>
        </div>
      </div>
    </section>
  );
}
