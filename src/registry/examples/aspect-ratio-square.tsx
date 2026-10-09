import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioSquare() {
  return (
    <div className="w-full max-w-[200px]">
      <AspectRatio
        ratio={1}
        className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground"
      >
        1 / 1
      </AspectRatio>
    </div>
  )
}
