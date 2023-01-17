import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import NavBar from "./components/NavBar";
import "./App.css";
import Pokedex from "./components/Pokedex";
import "./components/style.css";

const App = () => {
  return (
    <div className="divGeneral">
      <NavBar />
      <Routes className='testtest'>
        <Route exact path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </div>
  );
};

export default App;
