import { Sidebar } from "./sidebar"
import { Navbar } from "./navbar"
import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Navbar />

        <main className="flex-1 p-6 bg-muted">
          <Outlet />
        </main>

      </div>
    </div>
  )
}