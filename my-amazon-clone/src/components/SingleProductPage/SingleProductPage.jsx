import React, { useEffect } from 'react'
import './SingleProductPage.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../ProductContext/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProductPage = ({ cart, setCart }) => {
  const { ProductId } = useParams()
  const { fetchSingleProduct, isSingleLoading, singleProduct } = useDataContext()
  console.log(singleProduct)
  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetchSingleProduct(`${API}/${ProductId}`)
  }, [ProductId])

  const {
    category,
    description,
    id,
    image,
    price,
    title,
    rating } = singleProduct

  { (isSingleLoading) ? <h2>loading...</h2> : "" }
  const addToCart = (id, title, price, imageUrl, details) => {
    const obj = {
      id, title, price, imageUrl, details
    }
    setCart([...cart, obj])
    toast.success('item added!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='product-con'>
        <div className="box">
          <div className="product-img">
            <img src={image} alt="product-image" />
          </div>

        </div>
        <div className="product-des">
          <h3>{title}</h3>
          <p className='detail'>{description}</p>
          <p className='price'>₹ {price}</p>
          <button
            onClick={() => addToCart(id, title, price, image)}
          >Add to Cart</button>
        </div>
      </div>

    </>
  )
}

export default SingleProductPage