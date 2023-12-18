import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './components/Context/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <App />
  </DataProvider>,
)
