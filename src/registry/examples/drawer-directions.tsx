import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const directions = ["down", "up", "left", "right"] as const

export default function DrawerDirections() {
  return (
    <div className="flex flex-wrap gap-2">
      {directions.map((direction) => (
        <Drawer key={direction} swipeDirection={direction} showSwipeHandle>
          <DrawerTrigger render={<Button variant="outline" className="capitalize" />}>
            Swipe {direction}
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Swipe {direction} to dismiss</DrawerTitle>
              <DrawerDescription>
                Set swipeDirection to choose the edge and dismiss gesture.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4" />
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}
