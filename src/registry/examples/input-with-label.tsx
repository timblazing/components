import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputWithLabel() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="input-email">Email</FieldLabel>
      <Input id="input-email" type="email" placeholder="you@example.com" />
      <FieldDescription>We’ll only use this for account notices.</FieldDescription>
    </Field>
  )
}
