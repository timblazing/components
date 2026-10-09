import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"

export default function CheckboxWithDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="checkbox-newsletter" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-newsletter">Weekly digest</FieldLabel>
        <FieldDescription>
          A short summary of new components and changes, every Monday.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}
