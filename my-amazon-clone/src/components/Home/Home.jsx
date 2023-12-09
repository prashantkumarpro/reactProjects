import React from 'react';
import './Home.css';
import { useDataContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products, isError } = useDataContext();
  console.log(products);

  return (
    <>
      <div className='home-container'></div>
      <div className='product-grid'>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div className='box'>
                <Link to={`/SingleProduct/${product.id}`} className='product-img'>
                  <img src={product.image} alt='product-image' />
                </Link>
                <h3>{product.category}</h3>
                <p>{product.title}</p>
                <p className='price'>₹ {product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
