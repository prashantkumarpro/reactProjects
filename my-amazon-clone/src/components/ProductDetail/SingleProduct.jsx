import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../ProductList/data'
import './SingleProduct.css'


const SingleProduct = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    const [relatedProduct, setRelatedProduct] = useState([])

    useEffect(() => {
        const filterProduct = products.filter((product) => product.id == id)
        // console.log(filterProduct)
        setProduct(filterProduct[0])

        const filterBrandName = products.filter((brandName) => brandName.brand === product.brand)
        console.log(filterBrandName)
        setRelatedProduct(filterBrandName)

    }, [id, product.brand])




    return (
        <>

            <div className='product-con'>
                <div className="box">
                    <div className="product-img">
                        <img src={product.imageUrl} alt="product-image" />
                    </div>

                </div>
                <div className="product-des">
                    <h3>{product.name}</h3>
                    <p className='detail'>{product.details}</p>
                    <p className='price'>₹ {product.price}</p>
                    <button>Add to Cart</button>
                </div>
            </div>

            <div className="product-grid"><ul>
                {relatedProduct.map(product => (
                    <li
                        className='box'
                        key={product.id}>
                        <div className="product-img">
                            <img src={product.imageUrl} alt="product-image" />
                        </div>
                        <h3>{product.name}</h3>

                        <p className='price'>₹ {product.price}</p>
                        <button>Add to Cart</button>
                    </li >
                ))}
            </ul></div>
        </>

    )
}

export default SingleProduct