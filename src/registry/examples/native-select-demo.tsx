import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <NativeSelect className="w-48" aria-label="Status" defaultValue="">
      <NativeSelectOption value="" disabled>
        Select status
      </NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
    </NativeSelect>
  )
}
