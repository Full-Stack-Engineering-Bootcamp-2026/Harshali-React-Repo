import React from "react"

import { Routes,Route } from "react-router-dom"

import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './index.css'
import OrderSummary from "./components/OrderSummary"
import NoMatch from "./components/NoMatch"
import Product from "./components/Product"
import FeaturedProduct from "./components/FeaturedProduct"
import NewProduct from "./components/NewProduct"
import Users from "./components/Users"
import UserDetails from "./components/UserDetails"
import Profile from "./components/Profile"
const LazyAbout=React.lazy(()=>import('./components/About'))

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={
        <React.Suspense fallback='Loading ...'>
        <LazyAbout/>
        </React.Suspense>
        } />
       <Route path="/order-summary" element={<OrderSummary/>}/>
       <Route path="/products" element={<Product/>}>
          <Route index element={<Product/>}/>
          <Route path="featured" element={<FeaturedProduct/>}/>
          <Route path="new" element={<NewProduct/>}/>
       </Route>
       <Route path="users" element={<Users/>}>
       <Route path=":userId" element={<UserDetails/>}/>
       </Route>
       <Route path="profile" element={<Profile/>}/>
       <Route path="*" element={<NoMatch/>}/>
    </Routes>
    </div>
    
  )
}

export default App
