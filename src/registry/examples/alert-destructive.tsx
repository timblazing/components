import { CircleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertDestructive() {
  return (
    <Alert variant="destructive" className="w-full max-w-md">
      <CircleAlertIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your card was declined. Update your billing details to keep your plan
        active.
      </AlertDescription>
    </Alert>
  )
}
