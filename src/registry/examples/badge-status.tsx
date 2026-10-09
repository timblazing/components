import { Badge } from "@/components/ui/badge"

export default function BadgeStatus() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="bg-success/10 text-success">Paid</Badge>
      <Badge className="bg-warning/10 text-warning">Pending</Badge>
      <Badge className="bg-info/10 text-info">Processing</Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  )
}
