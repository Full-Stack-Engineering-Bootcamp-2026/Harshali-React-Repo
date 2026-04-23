import { ThemeProvider } from "@/context/theme-provider"
import { Routes, Route } from "react-router-dom"

import { MainLayout } from "@/layout/MainLayout"
import  Dashboard  from "./pages/Dashboard"
import { Forms } from "./pages/Forms"
import Buttons from "./pages/Buttons"
import Modals from "./pages/Modals"
function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="forms" element={<Forms />} />
            <Route path="buttons" element={<Buttons/>}/>
            <Route path="modals" element={<Modals />} />
          </Route>
          
        </Routes>

      </div>
    </ThemeProvider>
  )
}

export default App