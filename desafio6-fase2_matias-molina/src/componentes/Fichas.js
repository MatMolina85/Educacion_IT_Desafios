import './fichas.css';
import { useState } from 'react';

function Fichas (props) { 
    const {Id,Fila,Columna,cambioTitulo,colorTitulo} = props
    const [Contador,setContador] = useState (0)
    const [colorFondo,cambioFondo] = useState('grey')

    const sumador = ()=> { 
        setContador(Contador+1);
    }
    const fondoColor = () => {
        const fondo = Fila === Columna? 'red':'black';
        cambioFondo(fondo)
        colorTitulo(fondo)
    }  
    
    const activar = () => {
        sumador()
        fondoColor()
        changeTitulo()
    }

    const changeTitulo =() =>{ 
        cambioTitulo(Id,Fila,Columna,Contador)
    }


    return (
        <div className="ficha" style={{backgroundColor:colorFondo}} onClick={activar} >
            <div className="texto">
                <p>Id:{Id}</p>
                <p>Fila:{Fila}</p>
                <p>Columna:{Columna}</p>
                <p>Contador: {Contador}</p>
            </div>
        
        </div>

    )
    
}

export default Fichas



