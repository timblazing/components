import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaInvalid() {
  return (
    <Field data-invalid className="w-full max-w-sm">
      <FieldLabel htmlFor="textarea-invalid">Bio</FieldLabel>
      <Textarea id="textarea-invalid" aria-invalid defaultValue="Hi" />
      <FieldError>Bio must be at least 20 characters.</FieldError>
    </Field>
  )
}
