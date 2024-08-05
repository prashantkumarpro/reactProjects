import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Tranding from './Components/Tranding/Tranding.jsx';
import ErrorPage from './Components/ErrorPaeg.jsx'
import BrowseAll from './Components/BrowseAll/BrowseAll.jsx';
import Home from './Components/Home/Home.jsx';
import { Result } from './Components/Result.jsx';
import Search from './Components/Search.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/tranding",
        element: <Tranding />
      },
      {
        path: "/browseall",
        element: <BrowseAll />
      },

      {
        path: "/result/:queryResult",
        element: <Result />
      },
    ]
  },
  {
    path: "/search/:queryResult",
    element: <Search />
  },


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
