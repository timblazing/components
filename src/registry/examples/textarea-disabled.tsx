import { Textarea } from "@/components/ui/textarea"

export default function TextareaDisabled() {
  return (
    <Textarea
      disabled
      aria-label="Notes"
      placeholder="Notes are locked while the report is being generated."
      className="w-full max-w-sm"
    />
  )
}
