import { Button } from "@/components/ui/button"

export default function ButtonLink() {
  return (
    <Button variant="outline" nativeButton={false} render={<a href="#" />}>
      Read the docs
    </Button>
  )
}
