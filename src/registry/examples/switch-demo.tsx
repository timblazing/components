import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchDemo() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <Switch id="switch-airplane" />
      <FieldLabel htmlFor="switch-airplane">Airplane mode</FieldLabel>
    </Field>
  )
}
