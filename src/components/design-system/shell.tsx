"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { title: "Foundations", href: "/" },
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
] as const;

export function DesignSystemShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/fillrate/blocks/")) return children;
  return (
    <div className="system-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className="system-header">
        <div className="system-navbar">
          <Link href="/" className="system-brand">
            components
          </Link>
          <nav aria-label="Main navigation">
            {links.map(({ title, href }) => {
              const active =
                href === "/"
                  ? pathname === "/" || pathname === "/foundations"
                  : pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn("navbar-link", active && "is-active")}
                  aria-current={active ? "page" : undefined}
                >
                  {title}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main id="main-content" className="system-main" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
