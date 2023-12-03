import './App.css';
import Navbar from './Componentes/Navbar';
import {Index as Inicio} from './Componentes/INICIO/Index';
import {Index as Alta} from './Componentes/ALTA/Index';
import {Index as Nosotros} from './Componentes/NOSOTROS/Index';
import {Index as Footer} from './Componentes/FOOTER/Index'
import { Index as Carrito } from './Componentes/CARRITO/Index';
import { Index as Contacto } from './Componentes/CONTACTO/Index';
import { Index as Tienda } from './Componentes/TIENDA/Index';


import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>

          <Routes>
            <Route index element = { <Inicio titulo='Inicio'/> }  /> 
            <Route path='inicio' element={<Inicio titulo='Nosotros' />} />
            <Route path='nosotros' element={<Nosotros titulo='Nosotros'/>} />
            <Route path='alta' element={<Alta titulo='Alta'/>} />
            <Route path='carrito' element = {<Carrito titulo='Carrito' />} />
            <Route path='contacto' element = {<Contacto titulo='Contacto' />} />
            <Route path='tienda' element = { <Tienda titulo = 'Tienda'/> } />
            
            

          </Routes>

          <Footer />

        </BrowserRouter>
    </div>
  );
}

export default App;
