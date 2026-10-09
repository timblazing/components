import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export default function CheckboxDisabled() {
  return (
    <Field orientation="horizontal" className="w-fit" data-disabled="true">
      <Checkbox id="checkbox-disabled" disabled />
      <FieldLabel htmlFor="checkbox-disabled">Enable beta features</FieldLabel>
    </Field>
  )
}
