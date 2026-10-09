import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function FieldFieldset() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <FieldSet>
        <FieldLegend>Shipping address</FieldLegend>
        <FieldDescription>Where should we send your order?</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="field-street">Street</FieldLabel>
            <Input id="field-street" placeholder="123 Main St" />
          </Field>
          <Field>
            <FieldLabel htmlFor="field-city">City</FieldLabel>
            <Input id="field-city" placeholder="Austin" />
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator>Or</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="field-pickup">Pickup code</FieldLabel>
        <Input id="field-pickup" placeholder="PICKUP-1234" />
      </Field>
    </FieldGroup>
  )
}
