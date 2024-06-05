import React from 'react';
import '../styles/Aside.css';

function Aside() {
  return (
    <aside className="aside">
      <div className="aside-content">
        <div className="aside-section">
          <h3>Categorías</h3>
          <ul>
            <li><a href="#">Categoría 1</a></li>
            <li><a href="#">Categoría 2</a></li>
            <li><a href="#">Categoría 3</a></li>
            <li><a href="#">Categoría 4</a></li>
          </ul>
        </div>
        <div className="aside-section">
          <h3>Etiquetas populares</h3>
          <ul>
            <li><a href="#">Etiqueta 1</a></li>
            <li><a href="#">Etiqueta 2</a></li>
            <li><a href="#">Etiqueta 3</a></li>
            <li><a href="#">Etiqueta 4</a></li>
          </ul>
        </div>
        <div className="aside-section">
          <h3>Archivos</h3>
          <ul>
            <li><a href="#">Enero 2024</a></li>
            <li><a href="#">Febrero 2024</a></li>
            <li><a href="#">Marzo 2024</a></li>
            <li><a href="#">Abril 2024</a></li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
