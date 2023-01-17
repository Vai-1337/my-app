import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <>
    <div className='navbar'>
      <Link style={{textDecoration:"none"}} to='/'><button className='button'><span>Home</span></button></Link>
      <Link style={{textDecoration:"none"}} to='/pokedex'><button className='button'><span>Pokedex</span></button></Link>
      <Link style={{textDecoration:"none"}} to='/credits'><button className='button'><span>Credits</span></button></Link>
    </div>
    </>
  )
}

export default NavBar