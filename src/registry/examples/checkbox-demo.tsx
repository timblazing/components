import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldLabel } from "@/components/ui/field"

export default function CheckboxDemo() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <Checkbox id="checkbox-terms" />
      <FieldLabel htmlFor="checkbox-terms">Accept terms and conditions</FieldLabel>
    </Field>
  )
}
