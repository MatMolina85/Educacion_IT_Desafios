import ModelFactory from '../model/DAO/clientes/clientesFactory.js'
import config from '../config.js'


class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerClientes = async _ => {
        const cliente = await this.model.obtenerCliente()
        return cliente
    }

    guardarClientes = async cliente => {
        const clienteGuardado = await this.model.guardarCliente(cliente)
        return clienteGuardado
    }
}

export default Servicio

