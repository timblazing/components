import { Slider } from "@/components/ui/slider"

export default function SliderDisabled() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      disabled
      aria-label="Volume"
      className="w-full max-w-sm"
    />
  )
}
