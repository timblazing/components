import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const roles = [
  { label: "Viewer", value: "viewer" },
  { label: "Editor", value: "editor" },
  { label: "Admin", value: "admin" },
]

export default function SelectSizes() {
  return (
    <div className="flex items-center gap-2">
      {(["sm", "default"] as const).map((size) => (
        <Select key={size} items={roles} defaultValue="editor">
          <SelectTrigger size={size} className="w-36" aria-label={`Role (${size})`}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {roles.map((role) => (
              <SelectItem key={role.value} value={role.value}>
                {role.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  )
}
