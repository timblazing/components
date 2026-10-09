import { GridIcon, ListIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupSpacing() {
  return (
    <ToggleGroup spacing={2} defaultValue={["grid"]}>
      <ToggleGroupItem value="grid" variant="outline">
        <GridIcon />
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem value="list" variant="outline">
        <ListIcon />
        List
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
