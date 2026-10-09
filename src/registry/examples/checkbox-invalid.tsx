import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"

export default function CheckboxInvalid() {
  return (
    <Field data-invalid>
      <div className="flex items-center gap-2">
        <Checkbox id="checkbox-invalid" aria-invalid />
        <FieldLabel htmlFor="checkbox-invalid">
          I agree to the terms of service
        </FieldLabel>
      </div>
      <FieldError>You must accept the terms to continue.</FieldError>
    </Field>
  )
}
