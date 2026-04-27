
import { Route,Routes } from "react-router-dom"
import Home from "./components/pages/Home"
import Cart from "./components/pages/Cart"
import MainLayout from "./components/pages/MainLayout"
function App() {
 

  return (
    <>
     <Routes>

        <Route element={<MainLayout/>}>
           <Route path={'/'} element={<Home/>}/>
           <Route path={'/cart'} element={<Cart/>}/>
        </Route>
       
     </Routes>
    </>
  )
}

export default App
