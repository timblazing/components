import { ChevronRightIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export default function ItemLink() {
  return (
    <Item
      variant="outline"
      size="sm"
      className="w-full max-w-md"
      render={<a href="#" />}
    >
      <ItemContent>
        <ItemTitle>Billing and invoices</ItemTitle>
        <ItemDescription>Manage payment methods and download receipts.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <ChevronRightIcon className="size-4" />
      </ItemActions>
    </Item>
  )
}
