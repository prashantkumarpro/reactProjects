import React from 'react'
import './ProductList.css'
import { products } from './data';
import { Link } from 'react-router-dom';
export const ProductList = () => {

    return (
        <section>
            <div className="grid">
                <div className="filter">
                    <h3>Filter Options</h3>
                    <div className="filter-option">
                       <div className="price">
                        <h3>Price</h3>
                       <div className="price">₹ 5000</div>
                        <input type="range" name="" id="" />
                       </div>

                       <div className="colors">
                  
                        <div className="box">red</div>
                        <div className="box">blue</div>
                        <div className="box">green</div>
                        <div className="box">pink</div>
                       </div>
                    </div>
                </div>
                <div className="product-grid"><ul>
                    {products.map(product => (
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
                </ul></div>
            </div>
        </section>
    )
}
