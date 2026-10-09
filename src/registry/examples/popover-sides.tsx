import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const sides = ["top", "right", "bottom", "left"] as const

export default function PopoverSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((side) => (
        <Popover key={side}>
          <PopoverTrigger render={<Button variant="outline" className="capitalize" />}>
            {side}
          </PopoverTrigger>
          <PopoverContent side={side} className="w-48">
            Opens on the {side} side of the trigger.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
