import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const deploys = [
  { name: "web-app", branch: "main", status: "Ready", duration: "42s" },
  { name: "docs", branch: "fumadocs", status: "Building", duration: "1m 08s" },
  { name: "api", branch: "fix/auth", status: "Failed", duration: "19s" },
]

const statusClass: Record<string, string> = {
  Ready: "bg-success/10 text-success",
  Building: "bg-info/10 text-info",
  Failed: "bg-destructive/10 text-destructive",
}

export default function TableStatus() {
  return (
    <Table className="w-full max-w-xl">
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Branch</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Duration</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deploys.map((deploy) => (
          <TableRow key={deploy.name}>
            <TableCell className="font-medium">{deploy.name}</TableCell>
            <TableCell className="text-muted-foreground">{deploy.branch}</TableCell>
            <TableCell>
              <Badge className={statusClass[deploy.status]}>{deploy.status}</Badge>
            </TableCell>
            <TableCell className="text-right tabular-nums">{deploy.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
