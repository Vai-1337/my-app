import {createContext, useState, useEffect} from "react";
import axios from "axios";

export const PokeContext = createContext();

export const PokeController = ({children}) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setActive] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [pokeDex, setPokeDex] = useState();
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [stat, setStat] = useState();
  const [stat2, setStat2] = useState();

  const [playerHumans, setPlayerHumans] = useState([]);
  const [playerCPUs, setPlayerCPUs] = useState([]);

  const pokeFetch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setNextUrl(response.data.next);
      setPrevUrl(response.data.previous);
      pokeFetch2(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const pokeFetch2 = async res => {
    res.map(async item => {
      const result = await axios.get(item.url);
      setData2(e => {
        e = [...e, result.data];
        e.sort((a, b) => (a.id > b.id ? 1 : -1));
        return e;
      });
    });
  };

  useEffect(() => {
    pokeFetch();
  }, [url]);

  return (
    <PokeContext.Provider
      value={{
        value: [data, setData],
        value1: [data2, setData2],
        value2: [isLoading, setIsLoading],
        value3: [isActive, setActive],
        value4: [pokeDex, setPokeDex],
        value5: [nextUrl, setNextUrl],
        value6: [prevUrl, setPrevUrl],
        value7: [url, setUrl],
        value8: [stat, setStat],
        value9: [stat2, setStat2],
        playerHumans: [playerHumans, setPlayerHumans],
        playerCPUs: [playerCPUs, setPlayerCPUs],
      }}
    >
      {isLoading && children}
    </PokeContext.Provider>
  );
};
