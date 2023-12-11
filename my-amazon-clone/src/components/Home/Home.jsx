import React from 'react';
import './Home.css';
import { useDataContext } from '../ProductContext/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLoading, products, mensCloths } = useDataContext();
  console.log(mensCloths);

  return (
    <>

      <div className='home-container'>


      </div>
      <div className="card-con">
        <div className="card">
          <h3 style={{ textAlign: 'center', fontSize: '18px', marginTop: '5px' }}>Men's clothing</h3>
          <div className="boxes">
           
              {mensCloths.map(menCloth => (
                
                  <div className="box"  key={menCloth.id}>
                    <img src={menCloth.image} alt="" />
                  </div>
              
              ))}
        



          </div>

        </div>
        <div className="card">box2</div>
        <div className="card">box3</div>
      </div>
      <div className='product-grid'>
        <ul>
          {(isLoading) ? <h2>loading...</h2> : ''}
          {products.map(product => (
            <li key={product.id}>
              <div className='box' style={{ backgroundColor: '#fffff' }}>
                <Link to={`/SingleProduct/${product.id}`} className='product-img'>
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
