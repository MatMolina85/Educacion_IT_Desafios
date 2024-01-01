import Servicio from '../servicio/palabras.js';

class Controlador {

    constructor() {
        this.servicio = new Servicio();
    }

    obtenerPalabras = async (req,res) => {
        const palabras = await this.servicio.obtenerPalabras();
        res.json(palabras);
    };

    guardarPalabra = async (req,res) => {
        try {
            const palabra = req.body;
            const palabraGuardada = await this.servicio.guardarPalabra(palabra);
            res.json(palabraGuardada);
        }
        catch(error) {
            res.json({ errMsg: error.message });
        }
    };
}

export default Controlador;
