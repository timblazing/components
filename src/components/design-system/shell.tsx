"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Github } from "@/components/design-system/github-icon";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const GITHUB_URL = "https://github.com/timblazing";

const links = [
  { title: "Foundations", href: "/foundations" },
  { title: "Components", href: "/components" },
  { title: "Blocks", href: "/blocks" },
] as const;

export function DesignSystemShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (
    pathname.startsWith("/fillrate/blocks/") ||
    pathname.startsWith("/blocks/")
  ) {
    return children;
  }
  return (
    <div className="system-shell">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header className={cn("system-header", scrolled && "is-scrolled")}>
        <div className="ds-container system-navbar">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger className="navbar-menu-trigger">
              <Menu aria-hidden="true" />
              Menu
            </SheetTrigger>
            <SheetPopup side="left" className="mobile-nav" showCloseButton>
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <Link href="/" className="system-brand" onClick={closeMenu}>
                blasingame.dev
              </Link>
              <nav aria-label="Mobile navigation">
                {[{ title: "Home", href: "/" }, ...links].map(
                  ({ title, href }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMenu}
                        className={cn("mobile-nav-link", active && "is-active")}
                        aria-current={active ? "page" : undefined}
                      >
                        {title}
                      </Link>
                    );
                  },
                )}
              </nav>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="mobile-nav-github"
              >
                <Github size={16} />
                GitHub
              </a>
            </SheetPopup>
          </Sheet>
          <Link href="/" className="system-brand">
            blasingame.dev
          </Link>
          <div className="system-navbar-end">
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
            </nav>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="timblazing on GitHub"
              className="icon-link"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </header>
      <main id="main-content" className="system-main" tabIndex={-1}>
        {children}
      </main>
      <footer className="system-footer">
        <div className="ds-container system-footer-inner">
          <span className="system-footer-brand">blasingame.dev</span>
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
