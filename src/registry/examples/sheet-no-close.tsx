import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function SheetNoClose() {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline" />}>
        Cookie settings
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>Cookie settings</SheetTitle>
          <SheetDescription>
            We use cookies to keep you signed in and to understand how the site is used.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose render={<Button />}>Accept all</SheetClose>
          <SheetClose render={<Button variant="outline" />}>Essential only</SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
