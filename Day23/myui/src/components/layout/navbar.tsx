"use client"

import { Input } from "@/components/ui/input"
import { Bell, User, Sun, Moon } from "lucide-react"
import { useTheme } from "@/context/theme-provider"

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-background border-b border-border">

      <div className="w-full max-w-md">
        <Input
          placeholder="Search..."
          className="bg-muted border-none text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center gap-4">

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-lg hover:bg-muted"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Moon className="h-5 w-5 text-muted-foreground" />
          )}
        </button>

        <button>
          <Bell className="h-5 w-5 text-muted-foreground" />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center cursor-pointer">
              <User className="h-5 w-5" />
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="bg-popover text-popover-foreground border border-border">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </div>
  )
}