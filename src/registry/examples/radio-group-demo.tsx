import { Field, FieldLabel } from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" aria-label="Density" className="w-fit">
      <Field orientation="horizontal">
        <RadioGroupItem value="default" id="density-default" />
        <FieldLabel htmlFor="density-default">Default</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="comfortable" id="density-comfortable" />
        <FieldLabel htmlFor="density-comfortable">Comfortable</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="compact" id="density-compact" />
        <FieldLabel htmlFor="density-compact">Compact</FieldLabel>
      </Field>
    </RadioGroup>
  )
}
