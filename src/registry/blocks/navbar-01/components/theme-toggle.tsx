"use client"

import * as React from "react"
import { flushSync } from "react-dom"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "cn"

const subscribe = () => () => {}

// A pill holding both icons; the active theme's icon sits in a filled circle.
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = React.useSyncExternalStore(subscribe, () => true, () => false)
  const theme = mounted ? resolvedTheme : null

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light"
    if (document.startViewTransition) {
      document.startViewTransition(() => flushSync(() => setTheme(next)))
    } else {
      setTheme(next)
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className={cn(
        "inline-flex items-center overflow-hidden rounded-full border p-1",
        className
      )}
    >
      {(
        [
          ["light", SunIcon],
          ["dark", MoonIcon],
        ] as const
      ).map(([key, Icon]) => (
        <Icon
          key={key}
          fill="currentColor"
          className={cn(
            "size-6.5 rounded-full p-1.5 text-muted-foreground",
            theme === key && "bg-accent text-accent-foreground"
          )}
        />
      ))}
    </button>
  )
}
