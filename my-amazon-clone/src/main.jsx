import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Layout from './Layout.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import { ProductList } from './components/ProductList/ProductList.jsx'
import SingleProduct from './components/ProductDetail/SingleProduct.jsx'
import Result from './components/Result/Result.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/Mobile",
        element: <ProductList />,
      },
      {
        path: "/SingleProduct/:id",
        element: <SingleProduct />
      },
      {
        path: "/Result",
        element: <Result />
      }
    ]
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
