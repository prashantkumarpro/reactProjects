
import { ProductList } from './components/ProductList/ProductList';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <>

      <Navbar />
      <main>
        <Home />
        <ProductList />
      </main>
  
    </>
  )
}

export default App
