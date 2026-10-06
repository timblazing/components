"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "@/components/design-system/github-icon";
import { LogoMark } from "@/components/design-system/logo-mark";
import { cn } from "@/lib/utils";

const GITHUB_URL = "https://github.com/timblazing/components";

const links = [
  { title: "Foundations", href: "/" },
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
] as const;

export function DesignSystemShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/fillrate/blocks/")) return children;
  return (
    <div className="system-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className={cn("system-header", scrolled && "is-scrolled")}>
        <div className="ds-container system-navbar">
          <Link href="/" className="system-brand">
            <LogoMark />
            <span>components</span>
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
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="components on GitHub"
              className="icon-link"
            >
              <Github size={16} />
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content" className="system-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="ds-container system-footer">
        <div className="system-footer-top">
          <div>
            <div className="system-brand">
              <LogoMark />
              components
            </div>
            <p>The design system behind my projects.</p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="components on GitHub"
            className="icon-link is-outlined"
          >
            <Github size={16} />
          </a>
        </div>
      </footer>
    </div>
  );
}
