import React from 'react';
import './Result.css';
import { products } from '../ProductList/data';

const Result = () => {


    return (
        <>
            <div className='result-con'>
                Result
                <div className='product-con'>
                 {products.name}
                </div>
            </div>
        </>
    );
};

export default Result;
