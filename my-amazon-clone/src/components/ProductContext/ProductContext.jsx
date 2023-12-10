import { createContext, useContext, useState, useReducer, useEffect } from "react";
import reducer from '../ProductReducer/ProductReducer'

// Create the data Context 
const DataContext = createContext()

const initialState = {
    products: [],
    isLoading: true,
    isError: false
}
// data provider
export const DataProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState)
    //    console.log('api data store in data ' , data)
    useEffect(() => {
        // data fetching here
        dispatch({ type: 'API_LOADING' })
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                const products = data;
                setData(products);
                dispatch({ type: 'MY_API_DATA', payload: products })
            })
            .catch(error => dispatch({ type: 'API_ERROR' }))
    }, []);


    return (
        <DataContext.Provider value={{ ...state }}>
            {children}
        </DataContext.Provider>
    )
}

// use the Context 
export const useDataContext = () => {
    return useContext(DataContext);
}