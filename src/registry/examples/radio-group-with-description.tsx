import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupWithDescription() {
  return (
    <RadioGroup defaultValue="monthly" aria-label="Billing" className="max-w-sm">
      <Field orientation="horizontal">
        <RadioGroupItem value="monthly" id="billing-monthly" />
        <FieldContent>
          <FieldLabel htmlFor="billing-monthly">Monthly</FieldLabel>
          <FieldDescription>Billed every month. Cancel anytime.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="yearly" id="billing-yearly" />
        <FieldContent>
          <FieldLabel htmlFor="billing-yearly">Yearly</FieldLabel>
          <FieldDescription>Billed once a year. Save 20%.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  )
}
