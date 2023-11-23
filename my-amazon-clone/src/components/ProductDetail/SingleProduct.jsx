import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../ProductList/data'
import './SingleProduct.css'



const SingleProduct = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({})

    const [relatedProduct, setRelatedProduct] = useState([])

    const [amount, setAmount] = useState('')

    const handleFilterChange = (e) => {
        setAmount(e.target.value)
    }

    useEffect(() => {

        // single product
        const filterProduct = products.filter((product) => product.id == id)
        // console.log(filterProduct)
        setProduct(filterProduct[0])

        // filter product by brand name
        const filterBrandName = products.filter((brandName) => brandName.brand === product.brand)
        // console.log(filterBrandName)
        setRelatedProduct(filterBrandName)

        // Filter by amount

        const filterAmount = products.filter((mobile) => amount === '' || mobile.price <= parseInt(amount))
        console.log(filterAmount)
        setAmount(filterAmount)

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

            <label>
                Filter by Amount:
                <input
                    type="number"
                    value={amount}
                    onChange={handleFilterChange}
                />
            </label>

            <div className="product-grid">
                <h2 className='same-brands'>Same Mobiles Brand</h2>
                <ul>
                    {relatedProduct.map(product => (
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
        </>

    )
}

export default SingleProduct