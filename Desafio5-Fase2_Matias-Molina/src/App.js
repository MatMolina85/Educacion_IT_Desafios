
import './App.css';
import Contenido from './componentes/Contenido';
import Encabezado from './componentes/Encabezado';



    function App() {
    return (
      <div className="App ">
          <header >
            <div className='contenedor1'>
              <p>
                  <Encabezado titulo= "Titulo" color= "blue"/>
              </p>
            </div>
          </header>
        <div className="contenedor2">
          <p className='texto'> 
            <Contenido texto = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, facilis! " />
          </p>
        </div>
      
      </div>
    );
    }

    export default App;
