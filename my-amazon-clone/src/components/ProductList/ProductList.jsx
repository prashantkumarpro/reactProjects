import React from 'react'
import './ProductList.css'
import { products } from './data';
import { Link } from 'react-router-dom';
export const ProductList = () => {

    return (
        <section>
            <div className="grid">
                <div className="filter">filter
                    <div>Like rows, a column track is created for each value specified for grid-template-columns.</div>
                    <div>Like rows, a column track is created for each value specified for grid-template-columns.</div>
                    <div>Like rows, a column track is created for each value specified for grid-template-columns.</div>
                    <div>Like rows, a column track is created for each value specified for grid-template-columns.</div>
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
