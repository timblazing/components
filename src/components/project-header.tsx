"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { ThemeToggle } from "@/components/theme/theme-toggle"
import { projects } from "@/lib/projects"
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/ui/select"

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4 shrink-0" aria-hidden="true">
      <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.923c.563.104.769-.244.769-.542 0-.267-.01-.974-.015-1.912-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.646-1.25-1.646-1.022-.7.078-.686.078-.686 1.13.08 1.724 1.16 1.724 1.16 1.004 1.72 2.634 1.223 3.276.935.102-.727.393-1.223.715-1.504-2.5-.284-5.128-1.25-5.128-5.565 0-1.23.44-2.234 1.16-3.022-.116-.285-.503-1.43.11-2.98 0 0 .945-.303 3.094 1.155a10.78 10.78 0 0 1 5.63 0c2.148-1.458 3.09-1.155 3.09-1.155.617 1.55.229 2.695.113 2.98.722.788 1.158 1.792 1.158 3.022 0 4.326-2.633 5.278-5.14 5.557.405.349.766 1.034.766 2.084 0 1.504-.014 2.718-.014 3.087 0 .3.203.652.774.54A11.25 11.25 0 0 0 12 .75Z" />
    </svg>
  )
}

export function ProjectHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const selected = projects.find((project) => project.href === pathname)?.name ?? "fillrate"
  const items = projects.map(({ name }) => ({ label: name, value: name }))

  return (
    <header className="bg-background/80 sticky top-0 z-30 border-b backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[88rem] items-center gap-2 px-4 sm:gap-3 sm:px-6">
        <Link href="/" className="shrink-0 rounded-md font-semibold tracking-tight">components</Link>
        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          <Select items={items} value={selected} onValueChange={(value) => {
            const project = projects.find((project) => project.name === value)
            if (project) router.push(project.href)
          }}>
            <SelectTrigger aria-label="GitHub repository" size="sm" className="w-32 min-w-0 sm:w-36">
              <GitHubIcon />
              <SelectValue />
            </SelectTrigger>
            <SelectPopup align="end" alignItemWithTrigger={false}>
              {projects.map(({ name }) => <SelectItem key={name} value={name}><span className="flex items-center gap-2"><GitHubIcon />{name}</span></SelectItem>)}
            </SelectPopup>
          </Select>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
