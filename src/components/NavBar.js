import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <>
      <Link to='/' className="home">Home</Link>
    </>
  )
}

export default NavBar