import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldErrorExample() {
  return (
    <Field data-invalid className="w-full max-w-sm">
      <FieldLabel htmlFor="field-password">Password</FieldLabel>
      <Input id="field-password" type="password" aria-invalid defaultValue="abc" />
      <FieldError>Password must be at least 8 characters.</FieldError>
    </Field>
  )
}
