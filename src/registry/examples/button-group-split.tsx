import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Publish</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="icon" aria-label="More publish options">
        <ChevronDownIcon />
      </Button>
    </ButtonGroup>
  )
}
