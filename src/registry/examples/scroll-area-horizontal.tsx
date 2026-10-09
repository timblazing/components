import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const works = [
  { artist: "Ornella Binni", title: "Dune ridge" },
  { artist: "Tom Byrom", title: "Salt flats" },
  { artist: "Vladimir Malyavko", title: "Night harbor" },
  { artist: "Mara Ito", title: "Glass garden" },
  { artist: "Jonas Reed", title: "Low tide" },
]

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {works.map((work) => (
          <figure key={work.title} className="shrink-0">
            <div className="h-32 w-40 rounded-md bg-muted" />
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">{work.title}</span>
              <br />
              {work.artist}
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
