import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button>Button</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="outline" size="icon" aria-label="Open">
        <ArrowUpRightIcon />
      </Button>
    </div>
  )
}
