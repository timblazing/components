import { Field, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchSizes() {
  return (
    <div className="flex flex-col gap-4">
      <Field orientation="horizontal" className="w-fit">
        <Switch id="switch-sm" size="sm" />
        <FieldLabel htmlFor="switch-sm">Small</FieldLabel>
      </Field>
      <Field orientation="horizontal" className="w-fit">
        <Switch id="switch-default" />
        <FieldLabel htmlFor="switch-default">Default</FieldLabel>
      </Field>
    </div>
  )
}
