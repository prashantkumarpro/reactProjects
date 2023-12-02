import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout({ setData,cart }) {



  return (
    <>

      <Navbar setData={setData} cart={cart} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
