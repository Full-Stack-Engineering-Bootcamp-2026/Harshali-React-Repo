import React from 'react'
import Header from '../common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
function MainLayout() {
  return (
   <Provider store={store}>
      <Header/>

        <Outlet/>
      <Footer/>
    </Provider>
  )
}

export default MainLayout
