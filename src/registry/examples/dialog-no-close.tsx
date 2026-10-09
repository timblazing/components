import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function DialogNoClose() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>
        Accept terms
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Updated terms of service</DialogTitle>
          <DialogDescription>
            We have updated our terms. Please review and accept them to continue using the app.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button />}>I agree</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
