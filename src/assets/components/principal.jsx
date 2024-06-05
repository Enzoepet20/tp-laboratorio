import React from 'react'
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'
import Aside from './aside.jsx'
import '../styles/Principal.css'

export default function Principal() {
  return (
    <div className='app'>
     <Navbar></Navbar>
     <div className='general'>
     <div className="principal">
      <h1>Información de Fútbol</h1>
      <p>¡Bienvenido a nuestra sección de información sobre fútbol!</p>
      <p>Aquí encontrarás noticias, resultados, análisis y mucho más sobre el mundo del fútbol.</p>
      </div>
      <Aside></Aside>
      </div>
      <Footer></Footer>

    </div>
  );
}