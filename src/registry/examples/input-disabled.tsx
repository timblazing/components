import { Input } from "@/components/ui/input"

export default function InputDisabled() {
  return (
    <Input
      disabled
      defaultValue="blasingame.dev"
      aria-label="Workspace"
      className="w-full max-w-sm"
    />
  )
}
