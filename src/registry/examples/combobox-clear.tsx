"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const languages = ["TypeScript", "Python", "Go", "Rust", "Swift"]

export default function ComboboxClear() {
  return (
    <Combobox items={languages} defaultValue="TypeScript">
      <ComboboxInput placeholder="Select a language" showClear className="w-64" />
      <ComboboxContent>
        <ComboboxEmpty>No language found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
