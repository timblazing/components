"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerTypes() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button variant="outline" onClick={() => toast.success("Changes saved")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.info("A new version is available")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Storage is almost full")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Could not reach the server")}>
        Error
      </Button>
    </div>
  )
}
