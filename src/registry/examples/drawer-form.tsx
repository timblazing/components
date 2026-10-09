import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DrawerForm() {
  return (
    <Drawer showSwipeHandle>
      <DrawerTrigger render={<Button variant="outline" />}>
        Add payment method
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add payment method</DrawerTitle>
            <DrawerDescription>Your card details are encrypted.</DrawerDescription>
          </DrawerHeader>
          <form className="grid gap-3 p-4">
            <div className="grid gap-1.5">
              <Label htmlFor="drawer-card">Card number</Label>
              <Input id="drawer-card" inputMode="numeric" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="drawer-exp">Expiry</Label>
                <Input id="drawer-exp" placeholder="MM / YY" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="drawer-cvc">CVC</Label>
                <Input id="drawer-cvc" placeholder="123" />
              </div>
            </div>
          </form>
          <DrawerFooter>
            <Button>Add card</Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
