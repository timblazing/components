import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const members = [
  { name: "Ava Thompson", role: "Owner", seen: "Today" },
  { name: "Marcus Reid", role: "Editor", seen: "Yesterday" },
  { name: "Priya Nair", role: "Viewer", seen: "3 days ago" },
]

export default function TableActions() {
  return (
    <Table className="w-full max-w-xl">
      <TableHeader>
        <TableRow>
          <TableHead>Member</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Last active</TableHead>
          <TableHead className="w-10">
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {members.map((member) => (
          <TableRow key={member.name}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell className="text-muted-foreground">{member.seen}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon-sm" aria-label={`Actions for ${member.name}`}>
                <MoreHorizontalIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
