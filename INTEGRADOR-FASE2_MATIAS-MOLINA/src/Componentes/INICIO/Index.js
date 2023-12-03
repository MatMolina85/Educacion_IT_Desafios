import './Index.css'
import React, { useEffect, useState } from 'react';
import Foto1 from '../imagenes/bombones.jpg'
import Foto2 from '../imagenes/gomitas.jpg'
import Foto3 from '../imagenes/cajachocolate.jpg'
import Carrousel1 from '../imagenes/macarrones_h.jpg'
import Carrousel2 from '../imagenes/alfajores.jpg'
import Carrousel3 from '../imagenes/caramelos_acidos.jpg'


export function Index() { 


    const IMAGENES = [
      Carrousel1,Carrousel2,Carrousel3
    ];
  
    const [posicionActual, setPosicionActual] = useState(0);
  
    useEffect(() => {
      colocarImagen();
    }, );
  
    const pasarFoto = () => {
      setPosicionActual((prevPosicion) =>
        prevPosicion >= IMAGENES.length - 1 ? 0 : prevPosicion + 1
      );
    };
  
    const retrocederFoto = () => {
      setPosicionActual((prevPosicion) =>
        prevPosicion <= 0 ? IMAGENES.length - 1 : prevPosicion - 1
      );
    };
  
    const colocarImagen = () => {
      const foto = document.querySelector('#imagen');
      if (foto) {
        foto.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        foto.style.transition = '2s ease 0s';
      }
    };
  

    return (
      <div className="inicio">
        <div className="carousel">
          <button id="retroceder" onClick={retrocederFoto}> {'<'}</button> 
          <div id="imagen"> <p className="frase frase1">Candy Club</p></div>
          <button id="avanzar" onClick={pasarFoto}>{'>'} </button> 
        </div>

        <div className="card-container">
          <div className="cards">
            <img className="foto-card" src={Foto1} alt="Imagen 1" />
          <div className="card-content">
            <p className="parrafo-card">Los mejores alfajores de Sudamerica.</p>
          </div>
        </div>
    
        <div className="cards">
            <img className="foto-card" src={Foto2} alt="Imagen 2" />
            <div className="card-content">
              <p className="parrafo-card">La mas amplia variedad de gomitas.</p>
            </div>
        </div>
    
        <div className="cards ">
            <img className="foto-card" src={Foto3} alt="Imagen 3" />
            <div className="card-content">
              <p className="parrafo-card">Chocolates y bombones para vos.</p>
            </div>
        </div>
    </div>
</div>
    )
}
