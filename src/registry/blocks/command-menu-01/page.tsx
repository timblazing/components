"use client"

import {
  BellIcon,
  CalendarIcon,
  ChartColumnIcon,
  ChartPieIcon,
  CircleQuestionMarkIcon,
  ClockIcon,
  FileTextIcon,
  KanbanIcon,
  KeyboardIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MessageSquareIcon,
  PaletteIcon,
  SettingsIcon,
  SquareCheckIcon,
  TargetIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"

const workspaceItems = [
  { icon: LayoutDashboardIcon, label: "Dashboard" },
  { icon: KanbanIcon, label: "Projects" },
  { icon: SquareCheckIcon, label: "Tasks" },
  { icon: CalendarIcon, label: "Calendar" },
  { icon: UsersIcon, label: "Team members" },
  { icon: MessageSquareIcon, label: "Messages" },
  { icon: FileTextIcon, label: "Documents" },
  { icon: BellIcon, label: "Notifications" },
  { icon: ClockIcon, label: "Time tracking" },
  { icon: TargetIcon, label: "Goals" },
]

const analyticsItems = [
  { icon: ChartColumnIcon, label: "Overview" },
  { icon: TrendingUpIcon, label: "Performance" },
  { icon: ChartPieIcon, label: "Reports" },
  { icon: ZapIcon, label: "Insights" },
]

const settingsItems = [
  { icon: SettingsIcon, label: "Preferences" },
  { icon: PaletteIcon, label: "Appearance" },
  { icon: KeyboardIcon, label: "Keyboard shortcuts" },
  { icon: CircleQuestionMarkIcon, label: "Help & support" },
  { icon: LogOutIcon, label: "Sign out" },
]

export default function CommandMenu01() {
  const [open, setOpen] = useState(true)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outline">
        Open Command Menu
      </Button>

      <CommandDialog
        className="-translate-y-1/2 top-1/2"
        onOpenChange={setOpen}
        open={open}
        showCloseButton={false}
      >
        <Command>
          <CommandInput
            className="h-12"
            placeholder="Type a command or search..."
          />
          <CommandList className="h-[320px] max-h-[320px]">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Workspace">
              {workspaceItems.map((item) => (
                <CommandItem key={item.label}>
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Analytics">
              {analyticsItems.map((item) => (
                <CommandItem key={item.label}>
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandGroup heading="Settings">
              {settingsItems.map((item) => (
                <CommandItem key={item.label}>
                  <item.icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <div className="flex h-12 items-center justify-end border-t px-3">
            <button
              className="flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground"
              onClick={() => setOpen(false)}
              type="button"
            >
              <span>Close</span>
              <Kbd className="ml-1">Esc</Kbd>
            </button>
          </div>
        </Command>
      </CommandDialog>
    </>
  )
}
