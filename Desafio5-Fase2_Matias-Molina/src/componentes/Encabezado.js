import './Encabezado.css'

function Encabezado (props){   
    const {titulo,color} = props


    return (
        <div>
            <div style={{backgroundColor: color}}>
                <h1> {titulo} </h1>
            </div>

            
        </div>
    )

}

export default Encabezado