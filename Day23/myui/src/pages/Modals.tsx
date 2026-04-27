import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

export default function Modals() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-semibold text-white">Modals</h1>

      <Dialog>

        <DialogTrigger asChild>
          <Button className="bg-purple-600 hover:bg-purple-500">
            Open Modal
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-gray-900 text-white border border-gray-800 shadow-lg max-w-md rounded-xl">

          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Modal header
            </DialogTitle>

            <DialogDescription className="text-gray-400">
              Do you want to continue?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="mt-4 flex justify-end gap-3">

            <DialogClose asChild>
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button className="bg-purple-600 hover:bg-purple-500">
              Accept
            </Button>

          </DialogFooter>

        </DialogContent>
      </Dialog>
    </div>
  )
}