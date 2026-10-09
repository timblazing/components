import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"

export default function ProgressLabelExample() {
  return (
    <Progress value={72} className="w-full max-w-sm">
      <ProgressLabel>Storage used</ProgressLabel>
      <ProgressValue />
    </Progress>
  )
}
