"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerPromise() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
          loading: "Publishing site…",
          success: "Site published",
          error: "Publish failed",
        })
      }
    >
      Publish
    </Button>
  )
}
