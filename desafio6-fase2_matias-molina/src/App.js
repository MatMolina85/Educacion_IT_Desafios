
import './App.css';
import Fichas from './componentes/Fichas';
import { useState } from 'react';

function App() {
  const [titulo,nuevoTitulo] = useState('Seleccione una ficha')
  const [color, colorLetra] = useState('blue') 

  const cambioTitulo = (Id,Fila,Columna,Contador) => { 
    nuevoTitulo(`Ficha ID:${Id} (f:${Fila} c:${Columna}) Contador(${Contador+1})`)
  } 

  const colorTitulo = (fondo) => {
    colorLetra(fondo)
  }


  return (
    <div className="App">
      <h1 className='titulo' style={{color:color}}>{titulo} </h1>
      <div className="contenedor-ficha">
        <Fichas Id={1} Fila={0} Columna={0}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={2} Fila={0} Columna={1}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={3} Fila={0} Columna={2}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={4} Fila={1} Columna={0}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={5} Fila={1} Columna={1}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={6} Fila={1} Columna={2}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={7} Fila={2} Columna={0}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={8} Fila={2} Columna={1}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
        <Fichas Id={9} Fila={2} Columna={2}  cambioTitulo={cambioTitulo} colorTitulo={colorTitulo}/>
      </div>
    </div>
  );
}

export default App;
