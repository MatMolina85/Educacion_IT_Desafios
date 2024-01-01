import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 8080 

const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'FILE'
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1'
const BASE = process.env.BASE || 'test'

export default {
    MODO_PERSISTENCIA,   
    PORT,
    STRCNX,
    BASE
}