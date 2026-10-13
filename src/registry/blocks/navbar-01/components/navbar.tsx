"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDownIcon, SearchIcon } from "lucide-react"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Kbd } from "@/components/ui/kbd"
import { ThemeToggle } from "./theme-toggle"

export interface NavbarLink {
  title: string
  url: string
}

export interface NavbarIconLink extends NavbarLink {
  icon: React.ReactNode
}

// A sticky header with inline links on desktop. Below lg the links fold into
// a panel that drops out of the bar, which rounds off and lifts while open.
export function Navbar({
  logo,
  links,
  iconLinks = [],
  onSearch,
  className,
}: {
  logo: React.ReactNode
  links: NavbarLink[]
  iconLinks?: NavbarIconLink[]
  onSearch?: () => void
  className?: string
}) {
  const [open, setOpen] = React.useState(false)
  const headerRef = React.useRef<HTMLElement>(null)
  const pathname = usePathname()

  React.useEffect(() => {
    if (!open) return
    const onClick = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("click", onClick)
    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("click", onClick)
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [open])

  React.useEffect(() => {
    if (!onSearch) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        onSearch()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [onSearch])

  const isActive = (url: string) =>
    url.startsWith("/") &&
    (pathname === url || pathname.startsWith(`${url.replace(/\/$/, "")}/`))

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      render={
        <header
          ref={headerRef}
          className={cn("sticky top-0 z-40 h-14", className)}
        />
      }
    >
      <div
        className={cn(
          "border-b bg-background/80 backdrop-blur-lg transition-[box-shadow,border-radius]",
          open && "max-lg:rounded-b-2xl max-lg:shadow-lg"
        )}
      >
        <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center px-4">
          <Link href="/" className="inline-flex items-center gap-2.5 font-semibold">
            {logo}
          </Link>
          <ul className="flex items-center gap-2 px-6 max-sm:hidden">
            {links.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  data-active={isActive(link.url)}
                  className="inline-flex items-center gap-1 p-2 text-sm text-muted-foreground transition-colors hover:text-accent-foreground data-[active=true]:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-1 items-center justify-end gap-1.5 max-lg:hidden">
            {onSearch && (
              <button
                type="button"
                onClick={onSearch}
                className="inline-flex w-full max-w-60 items-center gap-2 rounded-full border bg-secondary/50 p-1.5 ps-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <SearchIcon className="size-4" />
                Search
                <Kbd className="ms-auto rounded-full">⌘K</Kbd>
              </button>
            )}
            <ThemeToggle />
            <IconLinks links={iconLinks} />
          </div>
          <div className="ms-auto -me-1.5 flex items-center lg:hidden">
            {onSearch && (
              <button
                type="button"
                aria-label="Open search"
                onClick={onSearch}
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <SearchIcon />
              </button>
            )}
            <CollapsibleTrigger
              aria-label="Toggle menu"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "aria-expanded:bg-transparent"
              )}
            >
              <ChevronDownIcon
                className={cn("transition-transform", open && "rotate-180")}
              />
            </CollapsibleTrigger>
          </div>
        </div>
        <CollapsibleContent className="mx-auto h-(--collapsible-panel-height) max-w-[1400px] overflow-hidden transition-[height,opacity] data-ending-style:h-0 data-ending-style:opacity-0 data-starting-style:h-0 data-starting-style:opacity-0 lg:hidden">
          <div className="flex flex-col p-4 pt-2 sm:flex-row sm:items-center sm:justify-end">
            {links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                data-active={isActive(link.url)}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 py-1.5 transition-colors hover:text-foreground/50 data-[active=true]:font-medium data-[active=true]:text-primary sm:hidden"
              >
                {link.title}
              </Link>
            ))}
            <div className="-ms-1.5 flex flex-1 items-center gap-2 max-sm:mt-2 sm:flex-none">
              <IconLinks links={iconLinks} />
              <div role="separator" className="flex-1" />
              <ThemeToggle />
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

function IconLinks({ links }: { links: NavbarIconLink[] }) {
  if (links.length === 0) return null
  return (
    <ul className="flex items-center">
      {links.map((link) => (
        <li key={link.url}>
          <a
            href={link.url}
            aria-label={link.title}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}
