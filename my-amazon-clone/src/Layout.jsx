import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout({ data, setData, onDataFilter }) {



  return (
    <>

      <Navbar data={data} setData={setData} onDataFilter={onDataFilter} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
