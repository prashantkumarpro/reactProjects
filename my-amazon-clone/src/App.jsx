import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
import SingleProduct from './components/ProductDetail/SingleProduct.jsx';
import Result from './components/Result/Result.jsx';
import { products } from './components/ProductList/data.jsx';
import Cart from './components/Cart/Cart.jsx';
import SingleProductPage from './components/SingleProductPage/SingleProductPage.jsx';


const App = () => {
  const [data, setData] = useState([...products]);
  const [cart, setCart] = useState([])



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setData={setData} data={data} cart={cart} />} >
          <Route index element={<Home />} />
          <Route path="Mobile" element={<ProductList item={data} cart={cart} setCart={setCart} />} />
          <Route path="SingleProduct/:id" element={<SingleProduct cart={cart} setCart={setCart} />} />
          <Route path="Result/:queryResult" element={<Result cart={cart} setCart={setCart} data={data} />} />
          <Route path="Cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/SingleProductPage/:ProductId" element={<SingleProductPage  cart={cart} setCart={setCart} />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
