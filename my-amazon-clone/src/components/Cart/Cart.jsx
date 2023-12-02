import React from 'react'
import './Cart.css'

const Cart = ({ cart, setCart}) => {
    console.log(cart)
    return (
        <>

            <div className="product-grid">
                {cart.map(item => (
                    <>
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
                    </>

                ))}
                {/* <div className="buttons">
                    <button>Check Out</button>
                    <button
                    onClick={setCart('')}
                     style={{ backgroundColor: 'red', color: "white" }}
                     >Clear Cart</button>
                </div> */}
            </div>

        </>
    )
}

export default Cart