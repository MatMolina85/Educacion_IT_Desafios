import Servicio from '../servicio/clientes.js'

class Controlador {

    constructor() {
        this.servicio = new Servicio()
    }

    obtenerClientes = async (req,res) => {
        const cliente = await this.servicio.obtenerClientes()
        res.json(cliente)
    }

    guardarClientes = async (req,res) => {
        try {
            const cliente = req.body
            const clienteGuardado = await this.servicio.guardarClientes(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.json({ errMsg: error.message })
        }
    }
}


export default Controlador