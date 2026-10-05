"use client"

import { Fragment, useEffect, useMemo, useRef, useState } from "react"
import { Hash } from "lucide-react"

import { ProjectHeader } from "@/components/project-header"
import {
  Command,
  CommandCollection,
  CommandDialog,
  CommandDialogPopup,
  CommandEmpty,
  CommandGroup,
  CommandGroupLabel,
  CommandInput,
  CommandItem,
  CommandList,
  CommandPanel,
  CommandSeparator,
} from "@/components/ui/command"
import { cn } from "@/lib/utils"

export type GalleryToc = readonly { id: string; title: string; items: readonly (readonly [string, string])[] }[]


type JumpItem = { value: string; label: string; id: string }

// Highlights the specimen nearest the top of the viewport.
function useActiveSection(allIds: string[]) {
  const [active, setActive] = useState<string>(allIds[0])
  useEffect(() => {
    const visible = new Map<string, number>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.boundingClientRect.top)
          else visible.delete(e.target.id)
        }
        const first = allIds.find((id) => visible.has(id))
        if (first) setActive(first)
      },
      { rootMargin: "-64px 0px -55% 0px" }
    )
    for (const id of allIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [allIds])
  return active
}

// Specimens mount as they near the viewport and change height, so re-aim once the scroll settles.
function jump(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id)
  if (!el) return
  history.replaceState(null, "", `#${id}`)
  const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
  const aligned = () => Math.abs(el.getBoundingClientRect().top - offset) < 2
  let tries = 3
  const settle = () => {
    if (aligned() || tries-- === 0) return
    window.addEventListener("scrollend", () => requestAnimationFrame(settle), { once: true })
    el.scrollIntoView({ behavior: "instant", block: "start" })
  }
  if (aligned()) return
  window.addEventListener("scrollend", () => requestAnimationFrame(settle), { once: true })
  el.scrollIntoView({ behavior, block: "start" })
}

// Plain-click nav links go through jump() so they land on their target.
function onNavClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  jump(id)
}

export function GalleryShell({ toc, children }: { toc: GalleryToc; children: React.ReactNode | ((openSearch: () => void) => React.ReactNode) }) {
  const allIds = useMemo(() => toc.flatMap((g) => g.items.map(([id]) => id)), [toc])
  const jumpGroups = useMemo(() => toc.map((g) => ({ value: g.title, items: g.items.map(([id, title]): JumpItem => ({ value: id, label: title, id })) })), [toc])
  const active = useActiveSection(allIds)

  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1))
    if (id) jump(id, "instant")
  }, [])
  const navRef = useRef<HTMLElement>(null)

  // Keep the active nav item visible inside the scrollable sticky nav, without moving the page.
  useEffect(() => {
    const nav = navRef.current
    const link = nav?.querySelector<HTMLElement>(`a[href="#${active}"]`)
    if (!nav || !link) return
    const top = link.offsetTop // the sticky nav is the offsetParent
    if (top < nav.scrollTop + 40 || top > nav.scrollTop + nav.clientHeight - 80) {
      nav.scrollTo({ top: top - nav.clientHeight / 3, behavior: "smooth" })
    }
  }, [active])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey) && e.shiftKey) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <div className="min-h-svh">
      <ProjectHeader />

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandDialogPopup>
          <Command items={jumpGroups}>
            <CommandInput placeholder="Search components…" />
            <CommandPanel>
              <CommandEmpty>No components found.</CommandEmpty>
              <CommandList>
                {(group: (typeof jumpGroups)[number]) => (
                  <Fragment key={group.value}>
                    <CommandGroup items={group.items}>
                      <CommandGroupLabel>{group.value}</CommandGroupLabel>
                      <CommandCollection>
                        {(item: JumpItem) => (
                          <CommandItem
                            key={item.id}
                            value={item}
                            onClick={() => {
                              setOpen(false)
                              jump(item.id)
                            }}
                          >
                            <Hash /> {item.label}
                          </CommandItem>
                        )}
                      </CommandCollection>
                    </CommandGroup>
                    <CommandSeparator />
                  </Fragment>
                )}
              </CommandList>
            </CommandPanel>
          </Command>
        </CommandDialogPopup>
      </CommandDialog>

      <div className="mx-auto flex max-w-[88rem] gap-8 px-5 pt-10 pb-20 sm:px-8">
        <nav ref={navRef} className="sticky top-20 hidden h-[calc(100svh-6rem)] w-40 shrink-0 overflow-y-auto pb-8 text-sm no-scrollbar xl:block" aria-label="Gallery sections">
          {toc.map((g, gi) => (
            <div key={g.id} className="mb-5">
              <a href={`#${g.id}`} onClick={(e) => onNavClick(e, g.id)} className="text-foreground mb-1.5 flex items-center gap-2 px-2 text-xs font-semibold">
                <span className="text-muted-foreground font-mono tabular-nums">{String(gi + 1).padStart(2, "0")}</span>
                {g.title}
              </a>
              <ul className="border-border ml-3 space-y-px border-l">
                {g.items.map(([id, title]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => onNavClick(e, id)}
                      className={cn(
                        "-ml-px block border-l py-1 pl-3 transition-colors duration-150",
                        active === id
                          ? "border-foreground text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground border-transparent"
                      )}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <main className="min-w-0 flex-1 space-y-24">
          {typeof children === "function" ? children(() => setOpen(true)) : children}
        </main>
      </div>
    </div>
  )
}
