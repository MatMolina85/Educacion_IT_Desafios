import { NavLink } from 'react-router-dom';
import './Index.css';
import Instagram from '../imagenes/Logos/3225191_app_instagram_logo_media_popular_icon.svg'
import facebook from '../imagenes/Logos/3225194_app_facebook_logo_media_popular_icon.svg'
import X from '../imagenes/Logos/11053970_x_logo_twitter_new_brand_icon.svg'
import Whatsapp from '../imagenes/Logos/3225179_app_logo_media_popular_social_icon.svg'


export function Index () {

  
  return (
    <div className="footer">
      <footer>
        <h3>Copyright 2023</h3>
        
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7657.684293390337!2d-58.869843143604236!3d-34.44806244735096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9c5713587819%3A0x39ea2834d34ffd98!2sLas%20Palmas%20del%20Pilar!5e0!3m2!1ses-419!2sar!4v1695581510755!5m2!1ses-419!2sar"
        width="600"
        height="450"
        title="Google Maps"
        style={{
          border: "0",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    
        
        <div className="div-footer">
            <NavLink className="logos-footer" to="#mapa">Ubicacion</NavLink>
            <NavLink className="logos-footer" to="/contacto">Contacto</NavLink>
            <NavLink className="logos-footer" to="/inicio">Novedades</NavLink>
            <div className="botones-logos-footer">
                <NavLink className="enlaces-footer" target='blank' to="https://www.instagram.com/"><img className="redes" src={Instagram} alt="instagram" /></NavLink>
                <NavLink className="enlaces-footer" target='blank' to="https://twitter.com/home"><img className="redes" src={X} alt="X" /> </NavLink>
                <NavLink className="enlaces-footer" target='blank' to="https://www.facebook.com/"><img className="redes" src={facebook} alt="Facebook" /></NavLink>
                <NavLink className="enlaces-footer" target='blank' to="https://wa.me/01124091266"><img className="redes" src={Whatsapp} alt="Whatsapp" /> </NavLink>
            </div>
        </div>

    </footer>
    </div>
  )

}