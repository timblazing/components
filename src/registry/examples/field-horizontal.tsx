import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function FieldHorizontal() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="field-marketing">Product updates</FieldLabel>
        <FieldDescription>
          Get an email when we ship something new.
        </FieldDescription>
      </FieldContent>
      <Switch id="field-marketing" />
    </Field>
  )
}
