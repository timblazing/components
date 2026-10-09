import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"

export default function SpinnerItem() {
  return (
    <Item variant="muted" className="w-full max-w-sm">
      <ItemMedia>
        <Spinner />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Processing payment…</ItemTitle>
      </ItemContent>
    </Item>
  )
}
