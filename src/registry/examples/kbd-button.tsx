import { Button } from "@/components/ui/button"
import { Kbd } from "@/components/ui/kbd"

export default function KbdButton() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="outline">
        Search <Kbd>⌘K</Kbd>
      </Button>
      <Button variant="outline">
        Save <Kbd>⌘S</Kbd>
      </Button>
    </div>
  )
}
