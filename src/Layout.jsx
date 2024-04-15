import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './SharedComponents/Header'
import Footer from './SharedComponents/Footer'
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