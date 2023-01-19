import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState, useEffect } from "react";
import Game from "../pages/Game";
import choice from "../asset/choice.jpeg"

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  

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

  const handleSearch = () => {
    const filteredPokemon = pokeData.filter(
      (pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filteredPokemon;
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm,pokeData])


  console.log(pokeData)

  return (
    <div className="pkdex">
      <img style={{width:"600px", marginLeft:"35%", marginTop:"1%"}} src={choice} alt="choice"/><br></br>
      <input
      type="text"
      placeholder="Search for a Pokemon"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
      <div className="container">
        <div className="left-content">
          <Card
          pokemon={handleSearch()}
            // pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
        {/* <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div> */}
      </div>
    </div>
  );
};
export default Main;
