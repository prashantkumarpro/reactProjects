import React, { useEffect } from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';
import { useFilterDataContext } from '../Context/FilterProductContext'


const ProductList = () => {
  const { filter_data, sortBy, categoryCon } = useFilterDataContext()

 
  return (
    <>
      <section>

        <div className="grid">
          <div className="filter-page">
            <h2 style={{ margin: '20px' }}>Filter</h2>

            <div className="brand">
              <h3>Category</h3>
              <div className="brand-con" categoryCon={categoryCon}>
                <div className="brand-name hover">All</div>
                <div className="brand-name hover">Men's clothing</div>
                <div className="brand-name hover" >Women's clothing</div>
                <div className="brand-name hover">Electronics</div>
              </div>
            </div>

            <div className="price-filter">
              <h3>Price</h3>
              <div className="price hover">All</div>
              <div className="price hover">Under ₹1,000</div>
              <div className="price hover" >₹1,000 - ₹5,000</div>
              <div className="price hover">₹5,000 - ₹10,000</div>
              <div className="price hover" >₹10,000 - ₹20,000</div>
              <div className="price hover">Over ₹20,000</div>
            </div>



          </div>
          <div className='product-grid'>
            <div className="header">
              <p>{filter_data.length} products total</p>
              <div className="sort-con">
                <label htmlFor="sortKey">sort by: </label>
                <select id="sortKey" onChange={sortBy}>
                  <option value="" selected disabled >select</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="price low to high"> price low to high</option>
                  <option value="price high to low">price high to low</option>
                </select>
              </div>

            </div>
            <ul>
              {filter_data.map(product => (
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
        </div>
      </section>
    </>
  )
}

export default ProductList