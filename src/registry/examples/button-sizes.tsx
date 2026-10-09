import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonSizes() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <Button size="xs" variant="outline">Extra small</Button>
        <Button size="sm" variant="outline">Small</Button>
        <Button variant="outline">Default</Button>
        <Button size="lg" variant="outline">Large</Button>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon-xs" variant="outline" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-sm" variant="outline" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon" variant="outline" aria-label="Add">
          <PlusIcon />
        </Button>
        <Button size="icon-lg" variant="outline" aria-label="Add">
          <PlusIcon />
        </Button>
      </div>
    </div>
  )
}
