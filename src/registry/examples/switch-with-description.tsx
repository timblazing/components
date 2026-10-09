import { Field, FieldContent, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchWithDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-security">Security alerts</FieldLabel>
        <FieldDescription>
          Email me when a new device signs in to my account.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-security" defaultChecked />
    </Field>
  )
}
