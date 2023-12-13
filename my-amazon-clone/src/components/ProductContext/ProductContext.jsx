import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from '../ProductReducer/ProductReducer'


// Create the data Context 
const DataContext = createContext()

const initialState = {
    products: [],
    isLoading: true,
    isError: false,
    mensCloths: [],
    singleProduct: {}
}
// data provider
export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const API = 'https://fakestoreapi.com/products'
    // get all products
    const fetchProducts = async () => {
        try {
            dispatch({ type: 'API_LOADING' }); // Dispatch loading before the API call
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const products = await response.json()
            dispatch({ type: 'MY_API_DATA', payload: products })
        } catch (error) {
            dispatch({ type: 'API_ERROR' })
        }
    }

    // get single product

    const fetchSingleProduct = async () => {
        try {
            const response = await fetch(API)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const singleProduct = await response.json()
            dispatch({ type: 'SINGLE_PRODUCT_DATA', payload: singleProduct });
        } catch (error) {
            dispatch({ type: 'SINGLE_API_ERROR' })
        }
    }
    useEffect(() => {
        // Call the fetchProducts function
        fetchProducts()
    }, []);

    const contextValue = { ...state, fetchProducts, fetchSingleProduct }

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    )
}

// use the Context 
export const useDataContext = () => {
    return useContext(DataContext);
}