import { NavLink } from "react-router-dom"
import { LayoutDashboard, FileText, Layers } from "lucide-react"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col justify-between">
      
      <div>
        <div className="px-4 py-5 text-xl font-bold">
          Windmill
        </div>

        <nav className="px-2 space-y-1">

          {/* Dashboard */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          {/* Forms */}
          <NavLink
            to="/forms"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <FileText size={18} />
            Forms
          </NavLink>

          {/* Modals */}
          <NavLink
            to="/modals"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:bg-gray-800"
              }`
            }
          >
            <FileText size={18} />
            Modals
          </NavLink>

          {/* Accordion */}
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="pages" className="border-none">

              <AccordionTrigger className="px-3 py-2 text-gray-400 hover:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <Layers size={18} />
                  Pages
                </div>
              </AccordionTrigger>

              <AccordionContent className="pl-10 space-y-1">

                <NavLink
                  to="/buttons"
                  className={({ isActive }) =>
                    `block py-1 text-sm ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  Buttons
                </NavLink>

                <NavLink
                  to="/cards"
                  className={({ isActive }) =>
                    `block py-1 text-sm ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  Cards
                </NavLink>

                <NavLink
                  to="/tables"
                  className={({ isActive }) =>
                    `block py-1 text-sm ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  Tables
                </NavLink>

              </AccordionContent>

            </AccordionItem>
          </Accordion>

        </nav>
      </div>

      {/* Bottom */}
      <div className="p-4">
        <button className="w-full bg-purple-600 hover:bg-purple-500 py-2 rounded-lg">
          Create account +
        </button>
      </div>

    </div>
  )
}