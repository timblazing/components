import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function NativeSelectSizes() {
  return (
    <div className="flex items-center gap-2">
      <NativeSelect size="sm" aria-label="Language (small)">
        <NativeSelectOption value="en">English</NativeSelectOption>
        <NativeSelectOption value="es">Spanish</NativeSelectOption>
      </NativeSelect>
      <NativeSelect aria-label="Language (default)">
        <NativeSelectOption value="en">English</NativeSelectOption>
        <NativeSelectOption value="es">Spanish</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
