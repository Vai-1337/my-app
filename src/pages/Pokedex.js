import React from 'react'
import { useContext, useState } from 'react';
import { PokeContext } from '../context/PokeContext';

const Pokedex = () => {
  const {value, value2} = useContext(PokeContext)
  const [data, setData] = value
  const [isLoading, setIsLoading] = value2;


  // const [data, setData] = value1
  console.log(data)


  return (
    <>
    {data.result}
    {isLoading && 
      <h1>Pokedex</h1>}
    </>
  )
}

export default Pokedex