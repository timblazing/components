import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LabelDisabled() {
  return (
    <div className="group grid w-full max-w-sm gap-2" data-disabled="true">
      <Label htmlFor="label-disabled">Workspace ID</Label>
      <Input id="label-disabled" defaultValue="ws_8f2k1" disabled />
    </div>
  )
}
