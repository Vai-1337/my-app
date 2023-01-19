import React from "react";
import Card from "./Card";
import axios from "axios";
import { useState, useEffect } from "react";
import choice from "../asset/choice.jpeg"
import { Checkbox } from "@mui/material";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=250&offset=0");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [filteredPokeData, setFilteredPokeData] = useState([])
  
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

  useEffect(() =>{
    setFilteredPokeData(pokeData)
  }, [pokeData])

  const handleCheck = (type, isChecked) => {
    if(isChecked) {
      setSelectedTypes([...selectedTypes, type])
         } else {
          setSelectedTypes([])}
    };

    useEffect(() =>{
      searchTerm !== '' ? setFilteredPokeData(filteredPokeData.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()))) : setFilteredPokeData(pokeData)
    }, [searchTerm, ]);
  
    useEffect(() =>{
      selectedTypes.length > 0 ?  setFilteredPokeData(filteredPokeData.filter(p => selectedTypes.some(e => p.types.map(pt => pt.type.name).includes(e)))) : setFilteredPokeData(pokeData)
    }, [ selectedTypes]);

  loading && <h1>Loading...</h1>
  return (
    <div className="pkdex">
      <img style={{width:"800px", marginLeft:"30%", marginTop:"1%", marginBottom:"5%"}} src={choice} alt="choice"/><br></br>
      <input
      type="text"
      placeholder="Search for a Pokemon"
      onChange={(e) => setSearchTerm(e.target.value)}
    /><div className="checkBox"><br></br>
    <Checkbox onChange={(e) => handleCheck("normal", e.target.checked)}  style={{color:"beige"}} /><p>Normal</p>
      <Checkbox onChange={(e) => handleCheck("fighting", e.target.checked)} style={{color:"maroon"}} /><p>Fighting</p>
      <Checkbox onChange={(e) => handleCheck("flying", e.target.checked)} style={{color:"brown"}} /><p>Flying</p>
      <Checkbox onChange={(e) => handleCheck("poison", e.target.checked)} style={{color:"purple"}} /><p>Poison</p>
      <Checkbox onChange={(e) => handleCheck("ground", e.target.checked)} style={{color:"olive"}} /><p>Ground</p>
      <Checkbox onChange={(e) => handleCheck("rock", e.target.checked)} style={{color:"grey"}}/><p>Rock</p>
      <Checkbox onChange={(e) => handleCheck("bug", e.target.checked)} style={{color:"greenyellow"}}/><p>Bug</p>
      <Checkbox onChange={(e) => handleCheck("ghost", e.target.checked)} style={{color:"burlywood"}}/><p>Ghost</p>
      <Checkbox onChange={(e) => handleCheck("steel", e.target.checked)} style={{color:"lightgrey"}}/><p>Steel</p>
      <Checkbox onChange={(e) => handleCheck("fire", e.target.checked)} style={{color:"orangered"}}/><p>Fire</p>
      <Checkbox onChange={(e) => handleCheck("water", e.target.checked)} style={{color:"blue"}}/><p>Water</p>
      <Checkbox onChange={(e) => handleCheck("grass", e.target.checked)} style={{color:"green"}}/><p>Grass</p>
      <Checkbox onChange={(e) => handleCheck("electric", e.target.checked)} style={{color:"yellow"}}/><p>Electric</p>
      <Checkbox onChange={(e) => handleCheck("psychic", e.target.checked)} style={{color:"pink"}}/><p>Psychic</p>
      <Checkbox onChange={(e) => handleCheck("ice", e.target.checked)} style={{color:"lightblue"}}/><p>Ice</p>
      <Checkbox onChange={(e) => handleCheck("dragon", e.target.checked)} style={{color:"orange"}}/><p>Dragon</p>
    </div>
      <div className="container">
        <div className="left-content">
          <Card
          pokemon={filteredPokeData}
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
