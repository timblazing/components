"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerAction() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("File moved to trash", {
          action: {
            label: "Undo",
            onClick: () => toast.success("File restored"),
          },
        })
      }
    >
      Delete file
    </Button>
  )
}
