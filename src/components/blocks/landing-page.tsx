"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check, GitBranch, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "One surface",
    description: "Every tool you already use, in a single place you control.",
  },
  {
    icon: GitBranch,
    title: "Built on your workflow",
    description: "Works with the accounts and repositories you already have.",
  },
  {
    icon: Zap,
    title: "Fast by default",
    description: "No spinners between you and the next thing you want to do.",
  },
];

const points = [
  "No lock-in, no quota caps",
  "Switch tools mid-task",
  "New integrations every week",
];

const links = ["GitHub", "Docs", "Changelog", "Terms", "Privacy"];

function Pill({
  children,
  ghost = false,
}: {
  children: React.ReactNode;
  ghost?: boolean;
}) {
  return (
    <a
      href="#"
      className={
        ghost
          ? "text-muted-foreground hover:bg-muted hover:text-foreground inline-flex h-11 items-center rounded-full px-4 text-sm font-medium transition-colors"
          : "bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition-colors"
      }
    >
      {children}
    </a>
  );
}

/** Sticky header. The bottom rule appears only once the page scrolls. */
function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-10 h-[60px] border-b transition-[background-color,border-color] duration-200 ${
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "bg-background border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-[1288px] items-center justify-between px-4 sm:px-6">
          <span className="text-sm font-semibold tracking-tight">Acme</span>
          <nav className="flex items-center gap-1 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground hidden h-8 items-center px-3 transition-colors sm:flex">
              Docs
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground hidden h-8 items-center px-3 transition-colors sm:flex">
              Pricing
            </a>
            <a href="#" className="bg-primary text-primary-foreground hover:bg-primary/90 flex h-8 items-center rounded-lg px-4 text-[13px] font-medium transition-colors">
              Get started
            </a>
          </nav>
      </div>
    </header>
  );
}

/** Marketing page: hero, product frame, features, split section, call to action. */
export function LandingPage() {
  return (
    <div className="bg-background text-foreground flex min-h-svh flex-col font-sans">
      <LandingHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 [background-image:radial-gradient(var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_30%,black,transparent)]"
          />
          <div className="relative mx-auto flex max-w-[1288px] flex-col items-center px-4 pt-20 pb-24 text-center sm:px-6 sm:pt-28">
            <h1 className="max-w-3xl text-[44px] leading-none font-medium tracking-[-0.05em] text-balance sm:text-7xl">
              The control plane for your work.
            </h1>
            <p className="text-muted-foreground mt-7 max-w-lg text-base leading-relaxed text-pretty sm:text-lg">
              Bring the tools you already pay for. Orchestrate them from one
              place, and keep everything that matters.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Pill>Download</Pill>
              <Pill ghost>
                View source <ArrowUpRight className="ml-1 size-3.5" aria-hidden="true" />
              </Pill>
            </div>
            <div className="border-border bg-card mt-16 w-full overflow-hidden rounded-2xl border text-left">
              <div className="border-border flex h-10 items-center gap-1.5 border-b px-4">
                <span className="bg-border-strong size-2.5 rounded-full" />
                <span className="bg-border-strong size-2.5 rounded-full" />
                <span className="bg-border-strong size-2.5 rounded-full" />
              </div>
              <div className="grid min-h-72 grid-cols-[10rem_1fr] sm:grid-cols-[14rem_1fr]">
                <div className="border-border space-y-2 border-r p-4">
                  {["Overview", "Activity", "Reviews", "Settings"].map((item, i) => (
                    <div
                      key={item}
                      className={
                        i === 0
                          ? "bg-muted text-foreground rounded-lg px-3 py-2 text-sm"
                          : "text-muted-foreground rounded-lg px-3 py-2 text-sm"
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="space-y-3 p-5">
                  {[72, 56, 88, 40].map((w, i) => (
                    <div key={i} className="bg-muted h-3 rounded-md" style={{ width: `${w}%` }} />
                  ))}
                  <div className="border-border bg-background mt-6 rounded-xl border p-4">
                    <p className="text-sm font-medium">Ready to ship</p>
                    <p className="text-muted-foreground mt-1 text-sm">
                      Every check passed. One click to publish.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-border border-t">
          <div className="mx-auto grid max-w-[1288px] gap-10 px-4 py-24 sm:px-6 md:grid-cols-[minmax(12rem,0.7fr)_minmax(0,1.3fr)] md:gap-16">
            <div>
              <h2 className="text-4xl leading-[1.1] font-medium tracking-[-0.04em]">
                Everything in one place.
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">
                A few principles shape every part of the product.
              </p>
            </div>
            <dl className="border-border border-t">
              {features.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="border-border grid grid-cols-[2rem_1fr] gap-x-4 border-b py-5"
                >
                  <Icon className="text-muted-foreground mt-0.5 size-5" aria-hidden="true" />
                  <div>
                    <dt className="text-base font-medium">{title}</dt>
                    <dd className="text-muted-foreground mt-1 text-sm leading-relaxed">
                      {description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Split */}
        <section className="border-border border-t">
          <div className="mx-auto grid max-w-[1288px] items-center gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 md:gap-16">
            <div className="border-border bg-card rounded-xl border p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Add onboarding flow</p>
                <span className="text-success border-success/30 rounded-full border px-2 py-0.5 text-[11px]">
                  Ready
                </span>
              </div>
              <div className="border-border mt-4 divide-y rounded-lg border text-xs">
                {["app/routes/index.tsx", "app/routes/layout.tsx", "app/styles.css"].map((f) => (
                  <div key={f} className="text-muted-foreground flex justify-between px-3 py-2.5">
                    <span className="font-mono">{f}</span>
                    <span className="text-success">+12</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <span className="bg-primary text-primary-foreground inline-flex h-8 items-center rounded-lg px-4 text-[13px] font-medium">
                  Open pull request
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl leading-[1.1] font-medium tracking-[-0.04em] text-balance">
                One button to ship it.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md text-base leading-relaxed text-pretty">
                When the work is good, a single action opens the pull request
                with a generated title and summary. No terminal dance required.
              </p>
              <ul className="mt-6 space-y-2.5">
                {points.map((p) => (
                  <li key={p} className="text-muted-foreground flex items-center gap-2.5 text-sm">
                    <Check className="text-success size-4" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="border-border border-t">
          <div className="mx-auto flex max-w-[1288px] flex-col items-center px-4 py-28 text-center sm:px-6">
            <h2 className="max-w-2xl text-4xl leading-none font-medium tracking-[-0.05em] text-balance sm:text-6xl">
              Your work deserves better.
            </h2>
            <p className="text-muted-foreground mt-6 max-w-md text-base leading-relaxed text-pretty">
              Free, open source, and fast. Install it, plug in what you
              already use, and get to work.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Pill>Download</Pill>
              <Pill ghost>Read the docs</Pill>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-border border-t">
        <div className="text-muted-foreground mx-auto flex max-w-[1288px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 py-9 text-xs sm:px-6">
          <span>© 2026 Acme · MIT licensed</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <a key={l} href="#" className="hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
