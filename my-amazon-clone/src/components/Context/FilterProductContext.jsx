import React, {  createContext, useContext, useEffect, useReducer } from 'react'
import { useDataContext } from './ProductContext'
import reducer from '../ProductReducer/FilterDataReducer'


// Create the filterDataContext

export const FilterDataContext = createContext()


const initialState = {
    filter_data: [],
    all_data: []
}



// Create the filterDataProvider

export const FilterDataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { products } = useDataContext()

    const { filterData } = products;
    console.log(filterData)
    dispatch({ type: 'FILTER_DATA', payload: products })

    useEffect(() => {

    }, [])





    return (<  FilterDataContext.Provider value={{ ...state }}>
        {children}
    </FilterDataContext.Provider>
    )
}

// Use the Context 

export const useFilterDataContext = () => {
    return useContext(FilterDataContext)
}