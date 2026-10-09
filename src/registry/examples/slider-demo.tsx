import { Slider } from "@/components/ui/slider"

export default function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      aria-label="Volume"
      className="w-full max-w-sm"
    />
  )
}
