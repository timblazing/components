import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardSmall() {
  return (
    <Card size="sm" className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>Storage</CardTitle>
        <CardDescription>Across all projects</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-medium tabular-nums">7.4 GB</p>
      </CardContent>
    </Card>
  )
}
