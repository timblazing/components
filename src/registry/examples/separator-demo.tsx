import { Separator } from "@/components/ui/separator"

export default function SeparatorDemo() {
  return (
    <div className="w-72">
      <div className="space-y-1">
        <h4 className="text-sm leading-none font-medium">Base UI Components</h4>
        <p className="text-sm text-muted-foreground">
          An open-source library of unstyled primitives.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Changelog</div>
      </div>
    </div>
  )
}
