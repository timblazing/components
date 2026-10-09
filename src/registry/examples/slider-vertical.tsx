import { Slider } from "@/components/ui/slider"

export default function SliderVertical() {
  return (
    <div className="flex h-40 items-center gap-6">
      {[40, 70, 20].map((value, i) => (
        <Slider
          key={i}
          defaultValue={[value]}
          max={100}
          orientation="vertical"
          aria-label={`Channel ${i + 1}`}
        />
      ))}
    </div>
  )
}
