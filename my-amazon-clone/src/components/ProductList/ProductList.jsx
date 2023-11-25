import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { products } from './data';
import { Link } from 'react-router-dom';


export const ProductList = () => {

    const [data, setData] = useState(products)
    const [brandName, setBrandName] = useState('')
    const [filterAmount, setFilterAmount] = useState(null)



    useEffect(() => {

        if (brandName) {
            // filter by brand name
            const filteredBrandData = products.filter((product) => product.brand === brandName);
            setData(filteredBrandData);
            // console.log(filteredData);
        } else if (filterAmount) {
            // filter by amount 
            const filterdeAmount = products.filter((amount) => filterAmount.min && amount.price <= filterAmount.max);
            setData(filterdeAmount)
            console.log(filterdeAmount)
        }
        else {
            setData(products)
        }


    }, [brandName, products, filterAmount])




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
                            <div className="brand-name hover" onClick={() => setBrandName('')}>All</div>
                        </div>
                    </div>

                    <div className="price-filter">
                        <h3>Price</h3>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 0, max: 1000 })}>Under ₹1,000</div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 1000, max: 5000 })}>₹1,000 - ₹5,000 </div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 5000, max: 10000 })}> ₹5,000 - ₹10,000</div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 10000, max: 20000 })}> ₹10,000 - ₹20,000</div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 20000, max: null })}>Over ₹20,000</div>
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
