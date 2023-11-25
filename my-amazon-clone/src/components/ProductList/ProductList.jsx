import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { products } from './data';
import { Link } from 'react-router-dom';


export const ProductList = () => {

    const [data, setData] = useState(products)
    const [brandName, setBrandName] = useState('')



    useEffect(() => {
        if (brandName) {
            const filteredData = products.filter((product) => product.brand === brandName);
            setData(filteredData);
            // console.log(filteredData);
        } else {
            setData(products)
        }
    }, [brandName])




    return (
        <section>
            <div className="grid">
                <div className="filter-page">
                    <h3>Category</h3>
                    <div className="brand">
                        <h3>Brand</h3>
                        <div className="brand-con">

                            <div className="brand-name hover"
                                onClick={() => setBrandName('Redmi')}>Redmi
                            </div>
                            <div className="brand-name hover" onClick={() => setBrandName('POCO')}>Poco</div>
                            <div className="brand-name hover" onClick={() => setBrandName('Motorola')}>Motorola </div>
                            <div className="brand-name hover" onClick={() => setBrandName('Samsung')}>Samsung</div>
                            <div className="brand-name hover" onClick={() => setData(products)}>All</div>
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
                    {data.map(product => (
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
