"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export default function InputGroupButtonExample() {
  const [copied, setCopied] = React.useState(false)

  return (
    <InputGroup className="w-full max-w-sm">
      <InputGroupInput
        readOnly
        value="https://blasingame.dev/components"
        aria-label="Share link"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          size="icon-xs"
          aria-label="Copy link"
          onClick={() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
          }}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
