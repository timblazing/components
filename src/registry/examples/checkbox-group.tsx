import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

const items = ["Desktop", "Documents", "Downloads"]

export default function CheckboxGroup() {
  return (
    <FieldSet>
      <FieldLegend variant="label">Show on desktop</FieldLegend>
      <FieldDescription>Select the folders to sync.</FieldDescription>
      <FieldGroup className="gap-3">
        {items.map((item) => (
          <Field key={item} orientation="horizontal">
            <Checkbox id={`checkbox-${item}`} defaultChecked={item !== "Downloads"} />
            <FieldLabel htmlFor={`checkbox-${item}`} className="font-normal">
              {item}
            </FieldLabel>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
