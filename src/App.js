import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Game from "./pages/Game";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <>
     
      <NavBar />
   
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
  
    </>
  );
};

export default App;
