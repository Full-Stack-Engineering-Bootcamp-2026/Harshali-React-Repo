import { ThemeProvider } from "@/context/theme-provider"
import { Routes, Route } from "react-router-dom"

import { MainLayout } from "@/layout/MainLayout"
import  Dashboard  from "./pages/Dashboard"
import Forms from "./pages/Forms"
import Buttons from "./pages/Buttons"
import Modals from "./pages/Modals"
import Login from "./pages/Login"
import CreateAccount from "./pages/CreateAccount"
import Charts from "./pages/Charts"
import CardsPage from "./pages/Cards"


function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-950 text-white">
        
        <Routes>

          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="forms" element={<Forms />} />
            <Route path="buttons" element={<Buttons/>}/>
            <Route path="modals" element={<Modals />} />
            <Route path="login" element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />

            <Route path="charts" element={<Charts />} />

            <Route path="/cards" element={<CardsPage />} />
          </Route>

        </Routes>

      </div>
    </ThemeProvider>
  )
}

export default App