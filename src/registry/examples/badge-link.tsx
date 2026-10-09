import { ArrowUpRightIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"

export default function BadgeLink() {
  return (
    <Badge render={<a href="#" />}>
      Changelog
      <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
