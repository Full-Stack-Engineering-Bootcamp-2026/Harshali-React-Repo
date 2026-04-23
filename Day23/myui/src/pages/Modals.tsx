import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

export default function Modals() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-semibold">Modals</h1>

      <Dialog>

        <DialogTrigger asChild>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Open Modal
          </Button>
        </DialogTrigger>

      <DialogContent className="bg-gray-900 text-white border-none shadow-none outline-none ring-0 focus:outline-none focus:ring-0 max-w-md rounded-xl">

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Modal header
            </DialogTitle>

            <DialogDescription className="text-gray-400">
              Do u want to continue ? 
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-4 flex justify-end gap-3 border-0">

            <DialogClose asChild>
              <Button variant="outline">
                Cancel
              </Button>
            </DialogClose>

            <Button className="bg-purple-600 hover:bg-purple-700">
              Accept
            </Button>

          </DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  )
}