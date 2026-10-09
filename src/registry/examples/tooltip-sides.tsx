import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const sides = ["top", "right", "bottom", "left"] as const

export default function TooltipSides() {
  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-2">
        {sides.map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger render={<Button variant="outline" className="capitalize" />}>
              {side}
            </TooltipTrigger>
            <TooltipContent side={side}>Tooltip on the {side}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}
