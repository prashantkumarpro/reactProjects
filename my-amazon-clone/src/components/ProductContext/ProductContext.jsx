import { createContext, useContext } from "react";


// Create the data Context 
const DataContext = createContext()

// data provider

export const DataProvider = ({ children }) => {
    const myName = 'Results';
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