import { Field, FieldLabel } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDisabled() {
  return (
    <RadioGroup defaultValue="email" aria-label="Contact method" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="email" id="contact-email" />
        <FieldLabel htmlFor="contact-email">Email</FieldLabel>
      </Field>
      <Field orientation="horizontal" data-disabled="true">
        <RadioGroupItem value="sms" id="contact-sms" disabled />
        <FieldLabel htmlFor="contact-sms">SMS (unavailable)</FieldLabel>
      </Field>
    </RadioGroup>
  )
}
