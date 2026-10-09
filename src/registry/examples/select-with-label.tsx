import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const timezones = [
  { label: "Pacific Time (PT)", value: "pt" },
  { label: "Mountain Time (MT)", value: "mt" },
  { label: "Central Time (CT)", value: "ct" },
  { label: "Eastern Time (ET)", value: "et" },
]

export default function SelectWithLabel() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel>Timezone</FieldLabel>
      <Select items={timezones} defaultValue="ct">
        <SelectTrigger className="w-full" aria-label="Timezone">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {timezones.map((tz) => (
            <SelectItem key={tz.value} value={tz.value}>
              {tz.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>Used for scheduling and notifications.</FieldDescription>
    </Field>
  )
}
