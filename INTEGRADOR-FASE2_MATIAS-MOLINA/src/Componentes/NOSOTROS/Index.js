import './Index.css'
import Imagen1 from '../imagenes/caja_bombones_h.jpg'
import Imagen2 from '../imagenes/jellybeans.jpg'
import Imagen3 from '../imagenes/caja_bombones_h2.jpg'


export function Index () { 

    return (
        <div class="nosotros">
            <h1>Candy Club Store</h1>
                <section>
                <div class="section1">
            
            <img class="foto1 foto1animacion" src={Imagen1} alt="bombones" />
        
          <div class="texto1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo in laborum amet rem vel itaque quas impedit, id quo fugit autem consequuntur deleniti, architecto repellendus nemo veritatis accusamus! Quod rem inventore quae voluptatibus a doloremque eos nostrum provident vitae modi nihil omnis impedit culpa, dolores
          </div>
          </div>

          <div class="section2">
            <div class="texto2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo in laborum amet rem vel itaque quas impedit, id quo fugit autem consequuntur deleniti, architecto repellendus nemo veritatis accusamus! Quod rem inventore quae voluptatibus a doloremque eos nostrum provident vitae modi nihil omnis impedit culpa, dolores
          </div>
          <img class="foto2 foto2animacion" src={Imagen2} alt="jellybeans" />
          </div>
                </section>
                  
                
                
    
        <section class="section3">
            <img class="foto3bis" src={Imagen3} alt="bombones" />
                <p class="texto3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ratione, voluptate cumque nihil voluptatum iste tempora ullam cupiditate natus facilis porro enim sit nisi doloremque quae impedit animi autem consectetur et. Assumenda 
                </p>
        </section>
        
    </div>

    )
}

