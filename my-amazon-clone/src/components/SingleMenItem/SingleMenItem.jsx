import React, { useEffect, useState } from 'react'
import './SingleMenItem.css'
import { useDataContext } from '../ProductContext/ProductContext'
import { useParams } from 'react-router-dom'

const SingleMenItem = () => {
    const { menId } = useParams()
    const { fetchSingleProduct, singleProduct } = useDataContext()

    const API = 'https://fakestoreapi.com/products'

    useEffect(() => {
        fetchSingleProduct(`${API}SingleMenItem/${menId}`)
    }, [menId])


    return (
        <>
            <div className="con">
                <h2>{menId} </h2>
            </div>
        </>
    )
}

export default SingleMenItem