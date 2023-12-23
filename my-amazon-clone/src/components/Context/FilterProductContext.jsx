import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useDataContext } from './ProductContext'
import reducer from '../ProductReducer/FilterDataReducer'


// Create the filterDataContext

export const FilterDataContext = createContext()


const initialState = {
    filter_data: [],
    all_data: [],
    sortData: 'A-Z'
}



// Create the filterDataProvider

export const FilterDataProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { products } = useDataContext()

    // sorting function

    const sortBy = (event) => {
        const sortValue = event.target.value;

        console.log('targeted value :', sortValue)
        dispatch({ type: "SORT_FILTER_DATA", payload: sortValue })
    }

    // let categoryConElm;
    // const categoryCon = () => {
    //     const element = document.querySelector('.brand-con');
    //     categoryConElm = element ? element.childNodes : null;
    //     return categoryConElm
    // }

    // categoryConElm = categoryCon()

    const categories = ['All', "men's clothing", "women's clothing", 'electronics'];

    // Function to handle category click
    const handleCategoryClick = (category) => {
        console.log(category);
        dispatch({ type: "SORT_FILTER_CATEGORY", payload: category })


    };



    useEffect(() => {
        dispatch({ type: 'FILTER_DATA', payload: products })
        console.log(products)

    }, [products])


    const contextValue = { ...state, sortBy, categories, handleCategoryClick }


    return (<  FilterDataContext.Provider value={contextValue}>
        {children}
    </FilterDataContext.Provider>
    )
}

// Use the Context 

export const useFilterDataContext = () => {
    return useContext(FilterDataContext)
}