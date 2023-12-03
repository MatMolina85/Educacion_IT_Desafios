import { NavLink } from 'react-router-dom'
import './Navbar.css'

// import Instagram from './imagenes/Logos/3225191_app_instagram_logo_media_popular_icon.svg'
// import facebook from './imagenes/Logos/3225194_app_facebook_logo_media_popular_icon.svg'
// import X from './imagenes/Logos/11053970_x_logo_twitter_new_brand_icon.svg'
// import Whatsapp from './imagenes/Logos/3225179_app_logo_media_popular_social_icon.svg'
import Logo from './imagenes/candy-logo.com.svg'
import Carrito from './imagenes/carrito-icon.svg'


const Navbar = () => {

return(
            <div>
                <header>
                    <nav>
                        <ul>
                            <li> <NavLink className="logo-principal" id="inicio" to="/inicio" ><img id="logo" src={Logo}  alt="Logo" /></NavLink> </li>
                            <li> <NavLink className=" btn-1" to="/alta" id="alta">Alta</NavLink> </li>
                            <li> <NavLink className=" btn-1" to="/nosotros" id="nosotros">Nosotros</NavLink> </li>
                            <li> <NavLink className=" btn-1" to="/tienda" id="tienda">Tienda</NavLink> </li>
                            <li> <NavLink className=" btn-1" to="/contacto" id="contacto">Contacto</NavLink> </li>
                        </ul>
                        
                        <div id="barras-busqueda">
                            <form action="#">
                                <label>
                                <input type="text" />
                                </label>
                                <input type="submit" value="Buscar" />
                            </form>
                        </div>
                        <div id="boton-carrito"><NavLink  to="/carrito" id="carrito"> <img className="carrito-compra" src={Carrito}  alt="carrito" /></NavLink>
                        </div>
                    </nav>
                    

                </header>

                

            </div>
    )
}
    


export default Navbar