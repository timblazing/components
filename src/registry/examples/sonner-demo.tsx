"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Friday, October 9 at 9:00 AM",
        })
      }
    >
      Show toast
    </Button>
  )
}
