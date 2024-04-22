import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './assets/components/navbar'
import './index.css'
import Footer from './assets/components/footer'
import Aside from './assets/components/aside'
import Principal from './assets/components/principal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>,
)
