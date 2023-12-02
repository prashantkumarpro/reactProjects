import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import { ProductList } from './components/ProductList/ProductList.jsx';
import SingleProduct from './components/ProductDetail/SingleProduct.jsx';
import Result from './components/Result/Result.jsx';
import { products } from './components/ProductList/data.jsx';

const App = () => {
  const [data, setData] = useState([...products]);


 

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setData={setData}/>} >
          <Route index element={<Home />} />
          <Route path="Mobile" element={<ProductList item={data} />} />
          <Route path="SingleProduct/:id" element={<SingleProduct />} />
          <Route path="Result/:queryResult" element={<Result/>} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
