import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
import SingleProduct from './components/ProductDetail/SingleProduct.jsx';
import { products } from './components/ProductList/data.jsx';
const App = () => {
    const [data, setData] = useState([...products])
    // console.log(data)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="Mobile" element={<ProductList />} />
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
