import React from 'react'
import { Link } from 'react-router-dom'
const EmptyCart = () => {
    return (
        <>
            <div>Epty Cart</div>
            <Link
                to="/Cart"
                style={{ color: "red" }}> Countinue Shopping </Link>
        </>
    )
}

export default EmptyCart