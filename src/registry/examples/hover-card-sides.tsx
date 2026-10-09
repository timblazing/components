import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const sides = ["top", "right", "bottom", "left"] as const

export default function HoverCardSides() {
  return (
    <div className="flex flex-wrap gap-2">
      {sides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger render={<Button variant="outline" className="capitalize" />}>
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side} className="w-48">
            Preview shown on the {side} side.
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
