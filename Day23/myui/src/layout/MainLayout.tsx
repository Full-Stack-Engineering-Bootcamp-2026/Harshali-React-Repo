import { Sidebar } from "@/components/layout/sidebar"
import { Navbar } from "@/components/layout/navbar"
import { Outlet } from "react-router-dom"

export function MainLayout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      
      
      <Sidebar />

     
      <div className="flex-1 flex flex-col">
        
       
        <Navbar />

       
        <div className="flex-1 p-6 bg-gray-950 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  )
}