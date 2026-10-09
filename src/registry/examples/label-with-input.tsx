import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LabelWithInput() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" type="email" placeholder="you@example.com" />
    </div>
  )
}
