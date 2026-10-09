import { BadgeCheckIcon, ClockIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="secondary">
        <BadgeCheckIcon data-icon="inline-start" />
        Verified
      </Badge>
      <Badge variant="outline">
        <ClockIcon data-icon="inline-start" />
        Pending review
      </Badge>
    </div>
  )
}
