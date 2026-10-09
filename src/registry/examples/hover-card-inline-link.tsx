import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function HoverCardInlineLink() {
  return (
    <p className="max-w-sm text-sm">
      Read the{" "}
      <HoverCard>
        <HoverCardTrigger
          render={<a href="#" className="font-medium underline underline-offset-4" />}
        >
          release notes
        </HoverCardTrigger>
        <HoverCardContent>
          <p className="font-medium">v2.4.0 release notes</p>
          <p className="text-muted-foreground">
            Faster builds, a new navigation menu, and 14 bug fixes.
          </p>
        </HoverCardContent>
      </HoverCard>{" "}
      before upgrading.
    </p>
  )
}
