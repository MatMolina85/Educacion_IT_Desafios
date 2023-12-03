import { useEffect } from 'react'

import './Index.css'

import { TablaCarrito } from './TablaCarrito'
import { useLocalStorage } from '../Hooks/useLocalStore'
import { enviarCarrito } from '../Servicios/carrito'

export function Index(props) {


    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    useEffect(() => {
        console.log('Componente Index Carrito (montado)')

        return () => {
            console.log('Componente Index Carrito (desmontado)')
        }
    }, [])

    
    function borrarAll() {
        setCarrito([])
    }

    function borrarID(id) {
        const carritoClon = [...carrito]
        const index = carritoClon.findIndex(p => p.id === id)
        carritoClon.splice(index,1)
        setCarrito(carritoClon)
    }
    
    function incrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad < producto.stock) {
            producto.cantidad++
            setCarrito(carritoClon)
        }
    }
    
    function decrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad > 1) {
            producto.cantidad--
            setCarrito(carritoClon)
        }
    }

    function sumaParcial(id) { 
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if (producto && producto.cantidad >= 1) {
            const total = producto.cantidad * producto.precio;
            return total;
        }
    }

    function sumaTotal() { 
        const totalFinal = carrito.reduce((total, producto) => total + sumaParcial(producto.id), 0);
        return totalFinal;
      }

    async function pedir() {
        console.log('pedir')

        const carritoEnviado = await enviarCarrito(carrito)
        console.log(carritoEnviado)
        setCarrito([])
    }

    return (
        <div className="Carrito">
            <div className="carrito-contenedor">

                <div className="carrito">
                    <h1>Carrito de compras</h1>
                    <br /><br />
                    {carrito.length === 0 && <h3 className='carritoVacio'>No se encontraron productos</h3> }
                    {carrito.length > 0 &&
                        <>
                            
                            <TablaCarrito 
                                carrito={carrito} 
                                borrarID={borrarID}
                                incrementarCantID={incrementarCantID}
                                decrementarCantID={decrementarCantID}
                                sumaParcial={sumaParcial}
                            />
                            <div className='confirmarBorrar'>
                                <button className="carrito__pedir" onClick={pedir}>Pedir</button>
                                <div className='totalFinal'>La suma del total de los productos es de ${sumaTotal()}</div>
                                <button className="carrito__borrar" onClick={borrarAll}>Borrar</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}