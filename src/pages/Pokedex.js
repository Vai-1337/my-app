import React from 'react'
import { useContext, useState } from 'react';
import { PokeContext } from '../context/PokeContext';
import { Link } from 'react-router-dom'

const Pokedex = () => {
  const {value, value2} = useContext(PokeContext)
  const [data, setData] = value
  const [isLoading, setIsLoading] = value2;


  // const [data, setData] = value1
  console.log(data.results)


  return (
    <>
    {!data.results}
    {isLoading && 
      <h1>Pokedex</h1>}
      <Link to="/game" className='game'>Game</Link>
    </>
  )
}

export default Pokedex