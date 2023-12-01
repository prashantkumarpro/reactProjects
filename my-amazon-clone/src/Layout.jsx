import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout({ setData }) {



  return (
    <>

      <Navbar setData={setData} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
