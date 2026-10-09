import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldDemo() {
  return (
    <form className="w-full max-w-sm">
      <FieldSet>
        <FieldLegend>Profile</FieldLegend>
        <FieldDescription>
          This information appears on your public page.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-name">Name</FieldLabel>
            <Input id="field-name" placeholder="Ada Lovelace" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-email">Email</FieldLabel>
            <Input id="field-email" type="email" placeholder="ada@example.com" />
            <FieldDescription>We’ll never share your email.</FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Button type="submit">Save</Button>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </FieldSet>
    </form>
  )
}
