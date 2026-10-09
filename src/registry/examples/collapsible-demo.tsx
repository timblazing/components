"use client"

import * as React from "react"
import { ChevronsUpDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleDemo() {
  const [open, setOpen] = React.useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-80 space-y-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">3 repositories starred</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon" aria-label="Toggle" />}
        >
          <ChevronsUpDownIcon />
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-3 py-2 font-mono text-sm">
        @base-ui/react
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-3 py-2 font-mono text-sm">
          fumadocs
        </div>
        <div className="rounded-md border px-3 py-2 font-mono text-sm">
          tailwindcss
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
