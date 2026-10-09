import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const countries = [
  { label: "United States", value: "us" },
  { label: "Canada", value: "ca" },
  { label: "Mexico", value: "mx" },
]

export default function SelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-xs">
      <FieldLabel>Country</FieldLabel>
      <Select items={countries}>
        <SelectTrigger className="w-full" aria-invalid aria-label="Country">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          {countries.map((c) => (
            <SelectItem key={c.value} value={c.value}>
              {c.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldError>Please select a country.</FieldError>
    </Field>
  )
}
