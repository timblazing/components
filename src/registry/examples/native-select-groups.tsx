import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export default function NativeSelectGroups() {
  return (
    <NativeSelect className="w-56" aria-label="Department" defaultValue="">
      <NativeSelectOption value="" disabled>
        Select department
      </NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Business">
        <NativeSelectOption value="sales">Sales</NativeSelectOption>
        <NativeSelectOption value="support">Support</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
