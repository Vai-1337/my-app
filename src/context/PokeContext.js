import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const PokeContext = createContext();

export const PokeController = ({ children }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const [data2, setData2] = useState([])
    

    const pokeFetch = async () => {
        try {
            const response = await axios.get(
                'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'
            )
            setData(response.data)
            setIsLoading(true);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        pokeFetch()
    }, []);
    
    return(
        <PokeContext.Provider value={{value: [data, setData], value2: [isLoading, setIsLoading], value3: [data2, setData2]}}>
            { isLoading && children }
        </PokeContext.Provider>
    )
}