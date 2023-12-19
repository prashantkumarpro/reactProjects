import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';
import { useFilterDataContext } from '../Context/FilterProductContext'


const ProductList = () => {
  const { filter_data, sortItem } = useFilterDataContext()



  return (
    <>
      <section>

        <div className="grid">

          <div className="filter-page">
            <h2>Filter</h2>
            <h3>Category</h3>
            <div className="brand">
              <h3>Brand</h3>
              <div className="brand-con">
                <div className="brand-name hover">All</div>
                <div className="brand-name hover">Redmi
                </div>
                <div className="brand-name hover" >Poco</div>
                <div className="brand-name hover" >Motorola </div>
                <div className="brand-name hover">Samsung</div>

              </div>
            </div>

            <div className="price-filter">
              <h3>Price</h3>
              <div className="price hover">All</div>
              <div className="price hover"></div>
              <div className="price hover" ></div>
              <div className="price hover"></div>
              <div className="price hover" ></div>
              <div className="price hover" ></div>
            </div>

            <div className="color-filter">
              <h3>Color</h3>
              <div className="hover" onClick={() => setFilterColor('')}>All</div>
              <div className="color-box">
                <div className="box" style={{ backgroundColor: 'blue' }}></div>
                <div className="box" style={{ backgroundColor: 'Black' }}  ></div>
                <div className="box" style={{ backgroundColor: 'green' }} ></div>
                <div className="box" style={{ backgroundColor: 'silver' }} ></div>
              </div>
            </div>

          </div>
          <div className='product-grid'>
            <div className="header">

              <p>{filter_data.length} products total</p>
              <div className="sort-con">
                <label for="sortKey">sort by: </label>
                <select id="sortKey">
                  <option value="sort by" selected disabled>select</option>
                  <option value="name">name</option>
                  <option value="price low to high"> price low to high</option>
                  <option value="price high to lo">price high to low</option>
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