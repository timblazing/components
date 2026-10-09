import { InboxIcon } from "lucide-react"

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function EmptyMinimal() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <InboxIcon className="size-6 text-muted-foreground" />
        </EmptyMedia>
        <EmptyTitle>Inbox zero</EmptyTitle>
        <EmptyDescription>You are all caught up.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
