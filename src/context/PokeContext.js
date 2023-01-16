import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokeContext = createContext();

export const PokeController = ({ children }) => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActive, setActive] = useState(false);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

  const pokeFetch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData(response.data.results);
      pokeFetch2(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const pokeFetch2 = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setData2((e) => {
        e = [...e, result.data];
        e.sort((a, b) => (a.id > b.id ? 1 : -1));
        return e;
      });
    });
  };

  useEffect(() => {
    pokeFetch();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        value: [data, setData],
        value1: [data2, setData2],
        value2: [isLoading, setIsLoading],
        value3: [isActive, setActive],
      }}
    >
      {isLoading && children}
    </PokeContext.Provider>
  );
};
