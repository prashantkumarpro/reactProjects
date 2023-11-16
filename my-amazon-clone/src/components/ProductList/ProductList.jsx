import React from 'react'
import './ProductList.css'
export const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 20.99 },
        { id: 2, name: 'Product 2', price: 34.99 },
        { id: 3, name: 'Product 3', price: 15.99 },
        { id: 4, name: 'Product 4', price: 15.99 },
        { id: 5, name: 'Product 5', price: 20.99 },
        { id: 6, name: 'Product 6', price: 34.99 },
        { id: 7, name: 'Product 7', price: 15.99 },
        { id: 8, name: 'Product 8', price: 15.99 },
        // Add more products as needed
    ];

    return (
        <section>
            <div className="grid">
                <div className="filter">filter
                    <div>Like rows, a column track is created for each value specified for grid-template-columns.</div>
                </div>
                <div className="product-grid"> <ul>
                    {products.map(product => (
                        <li className='box' key={product.id}>
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <button>Add to Cart</button>
                        </li>
                    ))}
                </ul></div>
            </div>


        </section>
    )
}
