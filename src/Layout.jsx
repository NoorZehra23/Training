import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './SharedComps/Header'
import Footer from './SharedComps/Footer'
const Layout = () =>{
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Layout