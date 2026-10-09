import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchDisabled() {
  return (
    <Field orientation="horizontal" className="w-fit" data-disabled="true">
      <Switch id="switch-disabled" disabled />
      <FieldLabel htmlFor="switch-disabled">Sync across devices</FieldLabel>
    </Field>
  )
}
