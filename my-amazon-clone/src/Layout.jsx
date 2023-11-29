import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { products } from './components/ProductList/data';



function Layout() {

const [data, setData] = useState(products)
// const [query, setQuery] = useState('')
  return (
    <>

      <Navbar data={data} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
