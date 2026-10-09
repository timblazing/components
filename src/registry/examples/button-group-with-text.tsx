import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

export default function ButtonGroupWithText() {
  return (
    <ButtonGroup className="w-full max-w-sm">
      <ButtonGroupText>https://</ButtonGroupText>
      <Input placeholder="example.com" aria-label="Domain" />
    </ButtonGroup>
  )
}
