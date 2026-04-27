import { NavLink } from "react-router-dom";
import { CreditCard } from "lucide-react"
import {
  LayoutDashboard,
  FileText,
  Layers,
  MousePointerClick,
  BarChart3,
} from "lucide-react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-background text-foreground border-r border-border flex flex-col justify-between">
      <div>
        <div className="px-4 py-5 text-xl font-bold">Windmill</div>

        <nav className="px-2 space-y-1">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/forms"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <FileText size={18} />
            Forms
          </NavLink>

          <NavLink
            to="/buttons"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <MousePointerClick size={18} />
            Buttons
          </NavLink>

          <NavLink
            to="/modals"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <FileText size={18} />
            Modals
          </NavLink>

          <NavLink
            to="/charts"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`
            }
          >
            <BarChart3 size={18} />
            Charts
          </NavLink>

          <NavLink
            to="/cards"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg ${
                isActive
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted"
              }`
            }
          >
            <CreditCard size={18} />
            Cards
          </NavLink>

          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="pages" className="border-none">

              <AccordionTrigger className="px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg">
                <div className="flex items-center gap-3">
                  <Layers size={18} />
                  Pages
                </div>
              </AccordionTrigger>

              <AccordionContent className="pl-10 space-y-1">

                <NavLink
                  to="/login"
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/create-account"
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground" >
                  Create account
                </NavLink>

                <NavLink
                  to="/forgot-password"
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Forgot password
                </NavLink>

                <NavLink
                  to="/404"
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  404
                </NavLink>

                <NavLink
                  to="/blank"
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground"
                >
                  Blank
                </NavLink>

              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </nav>
      </div>

      <div className="p-4">
        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded-lg">
          Create account +
        </button>
      </div>
    </div>
  )
}