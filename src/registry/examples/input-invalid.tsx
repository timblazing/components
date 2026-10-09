import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputInvalid() {
  return (
    <Field data-invalid className="w-full max-w-sm">
      <FieldLabel htmlFor="input-invalid">Username</FieldLabel>
      <Input id="input-invalid" defaultValue="clay blasingame" aria-invalid />
      <FieldError>Usernames can’t contain spaces.</FieldError>
    </Field>
  )
}
