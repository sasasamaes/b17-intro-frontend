import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <nav style={{ display: 'flex', justifyContent: 'space-around'}}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/shopping-cart">shopping-cart</Link>
      </nav>
      <Outlet/>
      <footer>
        <p>Derechos reservados</p>
      </footer>
    </>
  )
}

export default Layout