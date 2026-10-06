"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github } from "@/components/design-system/github-icon";
import { Separator } from "@/components/ui/separator";
import { LogoMark } from "@/components/design-system/logo-mark";
import { cn } from "@/lib/utils";

const GITHUB_URL = "https://github.com/timblazing/components";

const links = [
  { title: "Foundations", href: "/foundations" },
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
  { title: "Projects", href: "/projects" },
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

  if (pathname.startsWith("/fillrate/blocks/") || pathname.startsWith("/blocks/")) {
    return children;
  }
  return (
    <div className="system-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className={cn("system-header", scrolled && "is-scrolled")}>
        <div className="ds-container system-navbar">
          <Link href="/" className="system-brand">
            components
          </Link>
          <nav aria-label="Main navigation">
            {links.map(({ title, href }) => {
              const active = pathname === href;
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
            <Separator orientation="vertical" />
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
      <footer className="system-footer">
        <div className="ds-container system-footer-inner">
          <div className="system-footer-brand">
            <LogoMark />
            <span>MIT licensed</span>
          </div>
          <nav aria-label="Footer">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {links.map(({ title, href }) => (
              <Link key={href} href={href}>
                {title}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
