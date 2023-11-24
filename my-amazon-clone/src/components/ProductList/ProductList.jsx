import React from 'react'
import './ProductList.css'
import { products } from './data';
import { Link } from 'react-router-dom';
export const ProductList = () => {

    return (
        <section>
            <div className="grid">
                <div className="filter-page">
                    <h3>Category</h3>
                    <div className="brand">
                        <h3>Brand</h3>
                        <div className="brand-con">
                            <div className="brand-name hover">Redmi</div>
                            <div className="brand-name hover">Poco</div>
                            <div className="brand-name hover">Motorola </div>
                            <div
                                className="brand-name hover">Samsung</div>
                        </div>
                    </div>

                    <div className="price-filter">
                        <h3>Price</h3>
                        <div className="price hover">Under ₹1,000</div>
                        <div className="price hover">₹1,000 - ₹5,000 </div>
                        <div className="price hover"> ₹5,000 - ₹10,000</div>
                        <div className="price hover"> ₹10,000 - ₹20,000</div>
                        <div className="price hover">Over ₹20,000</div>
                    </div>

                    <div className="color-filter">
                        <h3>Color</h3>
                        <div className="color-box">
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
