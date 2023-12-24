import express from 'express'
import Controlador from '../controlador/clientes.js'

class Router {
    constructor() {
        this.router = express.Router()
        this.controlador = new Controlador()
    }

    start() {
        this.router.get('/', this.controlador.obtenerClientes)
        this.router.post('/', this.controlador.guardarClientes)

        return this.router
    }    
}


export default Router