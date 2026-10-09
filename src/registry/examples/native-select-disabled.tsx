import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function NativeSelectDisabled() {
  return (
    <NativeSelect disabled aria-label="Plan" className="w-48">
      <NativeSelectOption value="free">Free plan</NativeSelectOption>
      <NativeSelectOption value="pro">Pro plan</NativeSelectOption>
    </NativeSelect>
  )
}
