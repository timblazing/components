import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const regions = [
  { label: "US East", value: "us-east" },
  { label: "EU West", value: "eu-west" },
]

export default function SelectDisabled() {
  return (
    <div className="flex items-center gap-2">
      <Select items={regions} disabled defaultValue="us-east">
        <SelectTrigger className="w-40" aria-label="Region">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
