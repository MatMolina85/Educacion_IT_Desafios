import './TablaCarrito.css'


export const TablaCarrito = props => {

    const { carrito, borrarID, incrementarCantID, decrementarCantID, sumaParcial } = props

    return (
        <div className="TablaCarrito">

            <div className="table-responsive">
                <table className="carro">
                    <thead>
                        <tr>
                            <th style={{display:'none'}}>#</th>
                            <th>nombre</th>
                            <th>precio</th>
                            <th>marca</th>
                            <th>foto</th>
                            <th>cantidad</th>
                            <th>acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carrito.map((producto, index) =>
                                <tr key={index}>
                                    <td style={{display:'none'}}>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.marca}</td>
                                    <td><img width="100%" src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td >
                                        <div className='sumaResta'>
                                            <button className='botonesVar' onClick={() => decrementarCantID(producto.id)}>-</button>
                                            {producto.cantidad}
                                            <button className='botonesVar' onClick={() => incrementarCantID(producto.id)}>+</button>
                                        </div>
                                        <div className='sumaParcial'>
                                        La suma parcial es de :${sumaParcial(producto.id)}
                                            
                                        </div>
                                    </td>
                                    <td>
                                        <button className='botonBorrar' onClick={() => borrarID(producto.id)}>Borrar</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
