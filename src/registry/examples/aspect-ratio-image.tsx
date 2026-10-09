import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function AspectRatioImage() {
  return (
    <div className="w-full max-w-sm">
      <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://github.com/shadcn.png"
          alt="Profile portrait"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  )
}
