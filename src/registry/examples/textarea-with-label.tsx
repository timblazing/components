import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithLabel() {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
      <Textarea
        id="textarea-message"
        placeholder="Tell us what you're working on."
      />
      <FieldDescription>
        Your message will be copied to the support team.
      </FieldDescription>
    </Field>
  )
}
