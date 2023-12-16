import React from 'react';
import './Home.css';
import { useDataContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLoading, products, mensCloths } = useDataContext();


  return (
    <>

      <div className='home-container'>
      </div>
      <div className="card-con">
        <div className="card">
          <h3 style={{ textAlign: 'center', fontSize: '18px', marginTop: '5px' }}>Men's clothing</h3>
          <div className="boxes">
            {mensCloths.map(menCloth => (
              <Link to={`/SingleProductPage/${menCloth.id}`}
                className="box"
                key={menCloth.id}>
                <img src={menCloth.image} alt={menCloth.name} />
              </Link>
            ))}
          </div>

        </div>
        <div className="card">box2</div>
        <div className="card">box3</div>
      </div>
      
      {(isLoading) ? <h2>loading...</h2> : ''}
      <div className='product-grid'>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <div className='box' style={{ backgroundColor: '#fffff' }}>
                <Link to={`/SingleProductPage/${product.id}`} className='product-img'>
                  <img src={product.image} alt='product-image' />
                </Link>

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
