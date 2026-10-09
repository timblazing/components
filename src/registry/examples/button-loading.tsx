import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export default function ButtonLoading() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button disabled>
        <Spinner data-icon="inline-start" />
        Saving
      </Button>
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
    </div>
  )
}
