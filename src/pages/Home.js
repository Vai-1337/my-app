import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'

const Home = () => {
  return (
    <>
    <div className="home">
    <br />
      <Link to="/pokedex" className='pokedex'>Pokedex</Link>
      </div>
      
    </>
  )
}

export default Home