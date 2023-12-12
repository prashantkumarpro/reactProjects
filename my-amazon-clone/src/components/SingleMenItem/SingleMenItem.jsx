import React, { useEffect, useState } from 'react'
import './SingleMenItem.css'
import { useDataContext } from '../ProductContext/ProductContext'
import { useParams } from 'react-router-dom'

const SingleMenItem = () => {
    const { menId } = useParams()
    const { mensCloths } = useDataContext()
    const [item, setItem] = useState({})
    const filterItem = mensCloths.filter((item) => item.id === menId)
    console.log(filterItem)
    useEffect(() => {
        setItem(filterItem)
    }, [])


    return (
        <>
            <div className="con">
                <h2>{item.name}  </h2>
            </div>
        </>
    )
}

export default SingleMenItem