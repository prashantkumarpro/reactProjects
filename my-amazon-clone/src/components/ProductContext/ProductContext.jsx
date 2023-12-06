import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

// Create the data Context 
const DataContext = createContext()

// data provider

export const DataProvider = ({ children }) => {
    const myName = 'Results';
const [data, setData] = useState([])

    useEffect(() => {
        // data fetching here
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setData(data);
            } )
            .catch(error => console.log(error.message))
    }, []);
    return (
        <DataContext.Provider value={myName}>
            {children}
        </DataContext.Provider>
    )
}

// use the Context 
export const useDataContext = () => {
    return useContext(DataContext);
}