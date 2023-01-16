import React from 'react'
import { useContext } from 'react';
import { PokeContext } from '../context/PokeContext';
import { Link } from 'react-router-dom'

const Pokedex = () => {
  const {value, value2} = useContext(PokeContext)
  const [data] = value
  const [isLoading] = value2;



  console.log(data)

  return (
    <>
    {!data.results}
    {isLoading && 
      data.results.map((e, i) => {
        return(
          <>
          <h1 key={i}>{e.name}</h1>
          <p> {e.url} </p>
          {console.log(e)}
          
          </>
        )
      })}
      <h1>Pokedex</h1>
      <Link to="/game" className='game'>Game</Link>
    </>
  )
}

export default Pokedex