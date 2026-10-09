import { UnderlineIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export default function ToggleSizes() {
  return (
    <div className="flex items-center gap-2">
      <Toggle variant="outline" size="sm" aria-label="Underline small">
        <UnderlineIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Underline default">
        <UnderlineIcon />
      </Toggle>
      <Toggle variant="outline" size="lg" aria-label="Underline large">
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}
