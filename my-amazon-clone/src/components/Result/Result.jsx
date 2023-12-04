import React, { useEffect, useState } from 'react';
import './Result.css';
import { Link, useParams } from 'react-router-dom';
import { products } from '../ProductList/data';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = ({ cart, setCart }) => {
  const [filterData, setFilterData] = useState([])

  const { queryResult } = useParams();


  useEffect(() => {

    const filteredData = () => {

      const filteredQuery = products.filter((product) => product.name.toLowerCase().indexOf(queryResult.toLowerCase()) !== -1)

      setFilterData(filteredQuery)
      console.log(filteredQuery)
    }

    filteredData()

  }, [queryResult])

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
      {filterData.length > 0 ? (
        <div className="product-grid">
          <h3 style={{
            textAlign: 'center', 
            marginTop:'25px',
            fontSize:'35px'
          }}>Results</h3>
          <ul>
            {filterData.map(product => (
              <div
                className='box'
                key={product.id}>

                <Link
                  to={`/SingleProduct/${product.id}`}
                  className="product-img">
                  <img src={product.imageUrl} alt="product-image" />
                </Link>
                <h3>{product.name}</h3>

                <p className='price'>₹ {product.price}</p>
                <button
                  onClick={() => addToCart(product.id, product.title, product.price, product.imageUrl, product.details)}
                >Add to Cart</button>
              </div >
            ))}
          </ul></div>) : (
        <p>Products not found</p>

      )}

    </>
  );
};

export default Result;
