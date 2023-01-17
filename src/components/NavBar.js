import React from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <>
    <div className='navbar'>
      <img style={{width:"200px"}} src="https://wallpaperaccess.com/full/18957.jpg" alt=""/>
      <Link style={{textDecoration:"none"}} to='/'><button className='button'><span>Home</span></button></Link>
      <Link style={{textDecoration:"none"}} to='/pokedex'><button className='button'><span>Pokedex</span></button></Link>
      <Link style={{textDecoration:"none"}} to='/credits'><button className='button'><span>Credits</span></button></Link>
      <img style={{width:"200px"}} src="https://www.pixelstalk.net/wp-content/uploads/images1/Best-Pokemon-Go-Wallpapers-Image-1920x1080.png" alt=""/>
    </div>
    </>
  )
}

export default NavBar