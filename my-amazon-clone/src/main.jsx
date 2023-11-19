import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import ErrorPage from './components/ErrorPage/ErrorPage.jsx'
import Home from './components/Home/Home.jsx'
import { ProductList } from './components/ProductList/ProductList.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "Mobile",
    element: <ProductList/>,
  },
  {
    path: "Navbar",
    element: <Navbar/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
