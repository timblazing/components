import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full max-w-sm gap-2">
      <Textarea placeholder="Leave a comment" aria-label="Comment" />
      <Button className="justify-self-end">Post comment</Button>
    </div>
  )
}
