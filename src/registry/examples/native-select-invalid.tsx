import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export default function NativeSelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-xs">
      <FieldLabel htmlFor="native-state">State</FieldLabel>
      <NativeSelect id="native-state" aria-invalid defaultValue="">
        <NativeSelectOption value="" disabled>
          Select a state
        </NativeSelectOption>
        <NativeSelectOption value="tx">Texas</NativeSelectOption>
        <NativeSelectOption value="ca">California</NativeSelectOption>
      </NativeSelect>
      <FieldError>State is required.</FieldError>
    </Field>
  )
}
