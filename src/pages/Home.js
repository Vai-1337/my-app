import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'

const Home = () => {
  return (
    <>
      <Link to="/pokedex" className='pokedex'>Pokedex</Link>
      <Link to="/game" className='game'>Game</Link>
    </>
  )
}

export default Home