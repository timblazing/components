import { TriangleAlertIcon } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AlertStatus() {
  return (
    <Alert className="w-full max-w-md">
      <TriangleAlertIcon className="text-warning" />
      <AlertTitle>Approaching usage limit</AlertTitle>
      <AlertDescription>
        You have used 92% of your monthly API requests.
      </AlertDescription>
    </Alert>
  )
}
