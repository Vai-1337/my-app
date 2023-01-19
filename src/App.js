import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import NavBar from "./components/NavBar";
import Credits from "./components/Credits"
import CreateUserName from "./components/CreateUserName"
import "./App.css";
import Pokedex from "./components/Pokedex";
import "./components/style.css";
import CreateUsername from "./components/CreateUserName"
import Footer from "./components/Footer"

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);
  const onUsernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  return (
<>    <div className="divGeneral">
      <NavBar />
      <div>
      <h1 className="welcome" >Player is  {username}!</h1>     
    </div>
   
      <Routes className='testtest'>
        <Route exact path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/game" element={<Game />} />        
        <Route path="/credits" element={<Credits/>}/>
        <Route path="/account" element={<CreateUserName onUsernameChange={onUsernameChange} />}/>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
      <Footer />
    </div>
   
    </>
  );
};

export default App;
