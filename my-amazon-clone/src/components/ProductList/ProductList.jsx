import React from 'react'
import './ProductList.css'
export const ProductList = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 20.99 },
        { id: 2, name: 'Product 2', price: 34.99 },
        { id: 3, name: 'Product 3', price: 15.99 },
        { id: 4, name: 'Product 4', price: 15.99 },
        // Add more products as needed
    ];
  
    return (
        <section>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li className='box' key={product.id}>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}
