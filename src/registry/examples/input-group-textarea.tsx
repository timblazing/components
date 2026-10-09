import { ArrowUpIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export default function InputGroupTextareaExample() {
  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupTextarea placeholder="Write a reply..." />
      <InputGroupAddon align="block-end">
        <InputGroupText>0 / 280</InputGroupText>
        <InputGroupButton
          variant="default"
          size="icon-xs"
          className="ml-auto rounded-full"
          aria-label="Send"
        >
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
