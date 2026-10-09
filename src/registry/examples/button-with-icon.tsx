import { ArrowRightIcon, GitBranchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">
        <GitBranchIcon data-icon="inline-start" />
        New branch
      </Button>
      <Button>
        Continue
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </div>
  )
}
