import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** Page title and description over a masked dot field. */
export function PageHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="ds-page-header">
      <div aria-hidden="true" className="ds-page-header-field" />
      <div className="ds-container ds-page-header-inner">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

/** Two-column section: heading on the left, content on the right. */
export function Section({
  id,
  title,
  description,
  stacked = false,
  children,
}: {
  id?: string;
  title: string;
  description?: string;
  stacked?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="ds-section">
      <div className={cn("ds-container ds-section-grid", stacked && "is-stacked")}>
        <div className="ds-section-heading">
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <div className="ds-section-body">{children}</div>
      </div>
    </section>
  );
}

/** Large statement: the first sentence carries, the rest supports. */
export function Lead({
  strong,
  children,
}: {
  strong: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <p className="ds-lead">
      {strong}
      {children && <> <span>{children}</span></>}
    </p>
  );
}

export function TextLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="ds-text-link"
      {...(external && { target: "_blank", rel: "noreferrer" })}
    >
      {children}
      {external && <ArrowUpRight size={14} aria-hidden="true" />}
    </a>
  );
}
