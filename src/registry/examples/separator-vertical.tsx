import { Separator } from "@/components/ui/separator"

export default function SeparatorVertical() {
  return (
    <div className="flex h-8 items-center gap-4 text-sm">
      <span>Overview</span>
      <Separator orientation="vertical" />
      <span>Analytics</span>
      <Separator orientation="vertical" />
      <span>Reports</span>
    </div>
  )
}
