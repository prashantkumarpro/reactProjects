import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useDataContext } from './ProductContext'
import reducer from '../ProductReducer/FilterDataReducer'


// Create the filterDataContext

export const FilterDataContext = createContext()


const initialState = {
    filter_data: [],
    all_data: [],
    sortData: 'name'
}



// Create the filterDataProvider

export const FilterDataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { products } = useDataContext()

    // sorting function

    const sortBy = (event) => {
        const sortValue = event.target.value;
        console.log(sortValue)
        dispatch({ type: "SORT_FILTER_DATA", payload: sortValue })
    }



    useEffect(() => {
        dispatch({ type: 'FILTER_DATA', payload: products })

    }, [products])





    return (<  FilterDataContext.Provider value={{ ...state, sortBy }}>
        {children}
    </FilterDataContext.Provider>
    )
}

// Use the Context 

export const useFilterDataContext = () => {
    return useContext(FilterDataContext)
}