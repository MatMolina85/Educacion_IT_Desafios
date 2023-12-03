import './Ingreso.css'

export default function Ingreso(props) {

    const { nombre, precio, stock, marca, categoria, detalles, foto, envio } = props.producto
    const { onChange, onSubmit, editarID, invalid } = props

    
    const nombreValidacion = !/^[a-zA-Z\s]{3,30}$/.test(nombre);
    const precioValidacion = !/^[0-9]+\.[0-9]{2}$/.test(precio)
    const stockValidacion = !/^[0-9]{1,2}$/.test(stock)
    const marcaValidacion = !/^[a-zA-Z]{3,30}$/.test(marca)
    const categoriaValidacion = !/^[a-zA-Z]{3,30}$/.test

    return (
        <div className="alta">
             <h1>Alta de productos</h1>
            <div className="alta-form">
                <form className='formulario' onSubmit={onSubmit} >
                    {/* ------- Campo nombre ------- */}
                    <div className="inputs-group">
                        <label htmlFor="nombre">nombre</label>
                        <input type="text" id="nombre"  value={nombre} onChange={onChange} />
                        <span className="errores" style={{ display: invalid && nombreValidacion ? 'block' : 'none' }}>
                        El nombre debe tener entre 3 y 30 caracteres.
                    </span>
                    </div>

                    {/* ------- Campo precio ------- */}
                    <div className="inputs-group">
                        <label htmlFor="precio">precio</label>
                        <input type="number" id="precio"  value={precio} onChange={onChange} />
                        <span className="errores" style={{ display: invalid && precioValidacion ? 'block' : 'none' }}>
                        El precio debe ser un número con dos decimales.
                    </span>
                    </div>

                    {/* ------- Campo stock ------- */}
                    <div className="inputs-group">
                        <label htmlFor="stock">stock</label>
                        <input type="number" id="stock"  value={stock} onChange={onChange} />
                        <span className="errores" style={{ display: invalid && stockValidacion ? 'block' : 'none' }}>
                        El stock debe ser un número mayor que 0.
                    </span>
                    </div>

                    {/* ------- Campo marca ------- */}
                    <div className="inputs-group">
                        <label htmlFor="marca">marca</label>
                        <input type="text" id="marca"  value={marca} onChange={onChange} />
                        <span className="errores" style={{ display: invalid && marcaValidacion ? 'block' : 'none' }}>
                        La marca es obligatoria.
                    </span>
                    </div>

                    {/* ------- Campo categoria ------- */}
                    <div className="inputs-group">
                        <label htmlFor="categoria">categoria</label>
                        <input type="text" id="categoria"  value={categoria} onChange={onChange} />
                        <span className="errores" style={{ display: invalid && categoriaValidacion ? 'block' : 'none' }}>
                        La categoria es obligatoria.
                    </span>
                    </div>

                    {/* ------- Campo detalles ------- */}
                    <div className="inputs-group">
                        <label htmlFor="detalles">detalles</label>
                        <input type="text" id="detalles"value={detalles} onChange={onChange} />
                    </div>

                    {/* ------- Campo foto ------- */}
                    <div className="inputs-group">
                        <label htmlFor="foto">foto</label>
                        <input type="text" id="foto"  value={foto} onChange={onChange} />
                    </div>

                    {/* ------- Campo envio ------- */}
                    <div className="inputs-group ">
                        <input type="checkbox" id="envio" className=" inputs-group form-check-input" checked={envio} onChange={onChange} />
                        <label htmlFor="envio">envio</label>
                    </div>

                    {/* ----- botón de envío ------ */}

                    <button disabled={invalid} className={`boton-ingresar ${editarID ? 'boton-ingresar-none' : ''}`}>
                        { editarID? 'Actualizar' : 'Enviar' }
                    </button>
                </form>
            </div>
            </div>
    )
}