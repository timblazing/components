import { BoldIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleDisabled() {
  return (
    <Toggle variant="outline" aria-label="Toggle bold" disabled>
      <BoldIcon />
    </Toggle>
  )
}
