import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputFile() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-file">Avatar</FieldLabel>
      <Input id="input-file" type="file" accept="image/*" />
    </Field>
  )
}
