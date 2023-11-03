import { useState } from "react"


const Contenido = ({ texto }) => {
    const [fondo, setFondo] = useState('yellow');

    const colores = ['yellow', 'cyan', 'orange'];
    
    const cambiarFondo = () => {
      const indice = colores.indexOf(fondo);
      const nuevoFondo = colores[(indice + 1) % colores.length];
      setFondo(nuevoFondo);
    };
  
    return (
      <div style={{ backgroundColor: fondo }}>
        <p>{texto}</p>
        <button onClick={cambiarFondo}>Cambiar Fondo</button>
      </div>
    );
  };

export default Contenido