import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "../ModeToggle"

export function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-gray-900">
      
  
      <div className="flex items-center gap-2 w-full max-w-md">
        <Input
          placeholder="Search..."
          className="bg-gray-800 border-none text-white placeholder-gray-400"
        />
        <Button variant="secondary">Search</Button>
      </div>

      
      <div className="flex items-center gap-3">
        <ModeToggle />
      </div>

    </div>
  )
}