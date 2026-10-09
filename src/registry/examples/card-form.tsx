import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardForm() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Name it and pick a home for it.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Label htmlFor="card-project-name">Name</Label>
        <Input id="card-project-name" placeholder="Marketing site" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create</Button>
      </CardFooter>
    </Card>
  )
}
