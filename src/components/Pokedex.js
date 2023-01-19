import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import choice from "../asset/choice.jpeg"
import { Checkbox } from "@mui/material";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  
  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  useEffect(() => {
    pokeFun();
  }, [url]);

  // const handleSearch = () => {
  //   const filteredPokemon = pokeData.filter(
  //     (pokemon) =>
  //       pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   return filteredPokemon;
  // };

  const handleChange = () => {
    const query = pokeData.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return query}

  useEffect(() => {
    handleChange();
  }, [searchTerm])


  loading && <h1>Loading...</h1>
  return (
    <div className="pkdex">
      <img style={{width:"800px", marginLeft:"30%", marginTop:"1%", marginBottom:"5%"}} src={choice} alt="choice"/><br></br>
      <input
      type="text"
      placeholder="Search for a Pokemon"
      onChange={(e) => setSearchTerm(e.target.value)}
    /><div className="checkBox"><br></br>
    <Checkbox defaultChecked style={{color:"beige"}} /><p>Normal</p>
    <Checkbox defaultChecked style={{color:"maroon"}} /><p>Fighting</p>
    <Checkbox defaultChecked color="secondary" /><p>Flying</p>
    <Checkbox defaultChecked style={{color:"purple"}} /><p>Poison</p>
    <Checkbox defaultChecked style={{color:"olive"}} /><p>Ground</p>
    <Checkbox defaultChecked style={{color:"grey"}}/><p>Rock</p>
    <Checkbox defaultChecked style={{color:"greenyellow"}}/><p>Bug</p>
    <Checkbox defaultChecked style={{color:"burlywood"}}/><p>Ghost</p>
    <Checkbox defaultChecked style={{color:"lightgrey"}}/><p>Steel</p>
    <Checkbox defaultChecked style={{color:"orange"}}/><p>Fire</p>
    <Checkbox defaultChecked style={{color:""}}/><p>Water</p>
    <Checkbox defaultChecked color="success"/><p>Grass</p>
    <Checkbox defaultChecked style={{color:"yellow"}}/><p>Electric</p>
    <Checkbox defaultChecked style={{color:"pink"}}/><p>Psychic</p>
    <Checkbox defaultChecked style={{color:"lightblue"}}/><p>Ice</p>
    <Checkbox defaultChecked style={{color:"nightblue"}}/><p>Dragon</p>
    </div>
      <div className="container">
        <div className="left-content">
          <Card
          pokemon={handleChange()}
            // pokemon={pokeData}
            loading={loading}
          />
          <div className="btn-group">
            {!loading && prevUrl && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {!loading && nextUrl && (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
