import { Button } from "@/components/ui/button"
import { Heart, Pencil } from "lucide-react"

export default function Buttons() {
  return (
    <div className="space-y-8">

     
      <h1 className="text-2xl font-semibold">Buttons</h1>

     
      <div className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-4 rounded-xl">
        Star this project on Github
      </div>

     
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Sizes</h2>

        <div className="flex flex-wrap gap-4">

          <Button variant="purple" size="lg" className="px-10 py-6">
            Larger button
          </Button>

          <Button variant="purple" size="lg">
            Large button
          </Button>

          <Button variant="purple">
            Regular
          </Button>

          <Button variant="purple" disabled>
            Disabled
          </Button>

          <Button variant="purple" size="sm">
            Small
          </Button>

        </div>

        
      </div>

     
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Icons</h2>

        <div className="flex flex-wrap gap-4">

          <Button variant="purple" className="gap-2">
            Icon right
            <Heart size={16} />
          </Button>

          <Button variant="purple" className="gap-2">
            <Heart size={16} />
            Icon left
          </Button>

          <Button variant="purple" size="icon" className="rounded-full">
            <Heart size={16} />
          </Button>

          <Button variant="purple" size="icon" className="rounded-full">
            <Pencil size={16} />
          </Button>

        </div>
      </div>

    </div>
  )
}