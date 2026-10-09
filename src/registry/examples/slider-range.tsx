import { Slider } from "@/components/ui/slider"

export default function SliderRange() {
  return (
    <Slider
      defaultValue={[25, 75]}
      max={100}
      step={5}
      aria-label="Price range"
      className="w-full max-w-sm"
    />
  )
}
