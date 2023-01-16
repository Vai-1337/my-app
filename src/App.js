import React from 'react'
import { Routes, Route } from 'react'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import Game from './pages/Game'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="./pokedex" element={<Pokedex />}/>
        <Route path="./game" element={<Game />}/>
      </Routes>
    </>
  )
}

export default App