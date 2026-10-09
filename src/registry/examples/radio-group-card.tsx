import { Field, FieldContent, FieldDescription, FieldTitle, FieldLabel } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupCard() {
  return (
    <RadioGroup defaultValue="pro" aria-label="Plan" className="w-full max-w-sm">
      <FieldLabel htmlFor="plan-starter">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Starter</FieldTitle>
            <FieldDescription>For personal projects.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="starter" id="plan-starter" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="plan-pro">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>Pro</FieldTitle>
            <FieldDescription>For teams shipping to production.</FieldDescription>
          </FieldContent>
          <RadioGroupItem value="pro" id="plan-pro" />
        </Field>
      </FieldLabel>
    </RadioGroup>
  )
}
