import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipIconButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="outline" size="icon" aria-label="New project" />}
        >
          <PlusIcon />
        </TooltipTrigger>
        <TooltipContent>
          New project <Kbd>N</Kbd>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
