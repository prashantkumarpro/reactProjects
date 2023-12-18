import React from 'react'
import './ProductList.css'
import { useDataContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';


const ProductList = () => {
    const { isLoading, products } = useDataContext();
  return (
   <>
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
  )
}

export default ProductList