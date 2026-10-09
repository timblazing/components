import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item"

export default function ItemVariants() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      {(["default", "outline", "muted"] as const).map((variant) => (
        <Item key={variant} variant={variant}>
          <ItemContent>
            <ItemTitle className="capitalize">{variant}</ItemTitle>
            <ItemDescription>
              A short description of the {variant} item.
            </ItemDescription>
          </ItemContent>
        </Item>
      ))}
    </div>
  )
}
