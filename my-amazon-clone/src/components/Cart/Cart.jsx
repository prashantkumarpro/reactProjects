import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = ({ cart, setCart }) => {



    return (
        <>
            {cart.length > 0 ? (<div className="cart-con">
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <div className="container">
                                <div className="product-img">
                                    <img src={item.imageUrl} alt="product-image" />
                                </div>
                                <div className='box'>
                                    <p>{item.details}</p>
                                    <p className='price'>₹ {item.price}</p>
                                    <button>Check Out</button>
                                    <button>Buy Now</button>
                                </div >

                            </div>
                        </li>

                    ))}
                </ul>

                <div className="buttons">
                    <button>Check Out</button>
                    <button
                        onClick={() => setCart('')}
                        style={{ backgroundColor: 'red', color: "white" }}
                    >Clear Cart</button>
                </div>
            </div>) : (
                <>
                    <div>Epty Cart</div>
                    <Link
                        style={{ color: "red" }}> Countinue Shopping </Link>
                </>
            )}

        </>
    )
}

export default Cart