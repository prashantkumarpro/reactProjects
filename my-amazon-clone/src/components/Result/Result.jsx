import React from 'react';
import './Result.css';
import { Link, useParams } from 'react-router-dom';

const Result = ({ data }) => {
  const { queryResult } = useParams();

  return (
    <>
      <div className='result-con'>
        Result
        {data && data.length > 0 ? (
          <div className="product-grid">
            <ul>
              {data.map((product) => (
                <Link
                  to={`/SingleProduct/${product.id}`}
                  className='box'
                  key={product.id}
                >
                  <div className="product-img">
                    <img src={product.imageUrl} alt="product-image" />
                  </div>
                  <h3>{product.name}</h3>
                  <p className='price'>₹ {product.price}</p>
                  <button>Add to Cart</button>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
};

export default Result;
