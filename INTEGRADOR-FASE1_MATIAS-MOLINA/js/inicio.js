
        window.onload =  () => {
            const IMAGENES = [
                '../imagenes/macarrones_h.jpg',
                '../imagenes/alfajores.jpg',
                '../imagenes/caramelos_acidos.jpg'
            ];
            let posicionActual = 0;
            let btnVolver = document.querySelector('#retroceder');
            let btnAvanzar = document.querySelector('#avanzar');
            let foto = document.querySelector('#imagen');

            function pasarFoto() {
                if(posicionActual >= IMAGENES.length - 1) {
                    posicionActual = 0;
                } else {
                    posicionActual++;
                }
                colocarImagen();
            }


            function retrocederFoto() {
                if(posicionActual <= 0) {
                    posicionActual = IMAGENES.length - 1;
                } else {
                    posicionActual--;
                }
                colocarImagen();
            }

        
            function colocarImagen () {
                foto.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
                foto.style.transition = ' 2s ease 0s'
            }


            btnAvanzar.addEventListener('click', pasarFoto);
            btnVolver.addEventListener('click', retrocederFoto);

            

            colocarImagen();
        } 
