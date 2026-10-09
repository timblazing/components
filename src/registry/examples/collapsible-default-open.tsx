import { ChevronRightIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function CollapsibleDefaultOpen() {
  return (
    <Collapsible defaultOpen className="w-72">
      <CollapsibleTrigger className="group flex w-full items-center gap-2 text-sm font-medium">
        <ChevronRightIcon className="size-4 transition-transform group-data-[panel-open]:rotate-90" />
        Advanced settings
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 pl-6 text-sm text-muted-foreground">
        Adjust caching, retries, and request timeouts for this workspace.
      </CollapsibleContent>
    </Collapsible>
  )
}
