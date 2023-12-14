import React, { useEffect } from 'react'
import './SingleProductPage.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../ProductContext/ProductContext';

const SingleProductPage = () => {
  const { ProductId } = useParams()
  const { fetchSingleProduct, isSingleLoading, singleProduct } = useDataContext()

  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetchSingleProduct(`${API}`)
  }, [ProductId])
  console.log(singleProduct)
  const { id, image, price, title } = singleProduct
  return (
    <>
      <div className='con'>
        {(isSingleLoading) ? <h2>loading...</h2> : <h2>Welcome to my page:{price} {ProductId}</h2>}
<figcaption>{price}</figcaption>
      </div>
    </>
  )
}

export default SingleProductPage