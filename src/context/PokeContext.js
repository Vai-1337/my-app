import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const PokeContext = createContext();

export const PokeController = ({ children }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);    
    const [isActive, setActive] = useState(false);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")


    const pokeFetch = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(url)
            setData(response.data.results)
            
        } catch (err) {
            console.log(err)
        }
    }

    
    useEffect(() => {
        pokeFetch()
    }, []);
    
    return(
        <PokeContext.Provider value={{value: [data, setData], value2: [isLoading, setIsLoading], value3:[isActive, setActive]}}>
            { isLoading && children }
        </PokeContext.Provider>
    )
}