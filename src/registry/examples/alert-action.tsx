import { CircleCheckIcon } from "lucide-react"

import { Alert, AlertAction, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertActionExample() {
  return (
    <Alert className="w-full max-w-md">
      <CircleCheckIcon className="text-success" />
      <AlertTitle>Deployment complete</AlertTitle>
      <AlertDescription>web-app is live on production.</AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          View
        </Button>
      </AlertAction>
    </Alert>
  )
}
