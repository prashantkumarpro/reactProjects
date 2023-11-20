
// import { ProductList } from './components/ProductList/ProductList';
// import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>

      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
