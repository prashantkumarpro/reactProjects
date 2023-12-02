import React, { useEffect, useState } from 'react';
import './Result.css';
import { Link, useParams } from 'react-router-dom';
import { products } from '../ProductList/data';


const Result = () => {
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

  return (
    <>
      {filterData.length > 0 ? (<div className="product-grid"><ul>
        {filterData.map(product => (
          <Link
            to={`/SingleProduct/${product.id}`}
            className='box'
            key={product.id}>

            <div className="product-img">
              <img src={product.imageUrl} alt="product-image" />
            </div>
            <h3>{product.name}</h3>

            <p className='price'>₹ {product.price}</p>
            <button>Add to Cart</button>
          </Link >
        ))}
      </ul></div>) : (
        <p>Products not found</p>
      )}
    </>
  );
};

export default Result;
