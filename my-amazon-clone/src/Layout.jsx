import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';




function Layout() {
  return (
    <>

      <Navbar data={data} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
