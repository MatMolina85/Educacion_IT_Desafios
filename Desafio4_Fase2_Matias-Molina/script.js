class cargarImagen {
    constructor() {
        this.divs = [
        document.querySelectorAll('div')[0],
        document.querySelectorAll('div')[1],
        document.querySelectorAll('div')[2]
    ];
    this.zonas = [
        document.getElementById('zona1'),
        document.getElementById('zona2'),
        document.getElementById('zona3')
    ];

    this.inicioEventos();
    }

    mostrarCargando(div) {
    div.innerHTML = 'Cargando...';
    }

    cargarImagen(imagen, div) {
    return new Promise((resolve, reject) => {
        this.mostrarCargando(div);

        setTimeout(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', imagen + '?' + Date.now());
        xhr.responseType = 'blob';

        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
            let imagenBlob = xhr.response;
            const url = URL.createObjectURL(imagenBlob);
            div.innerHTML = '<img src="' + url + '" alt="">';

            const image = div.querySelector('img');
            image.addEventListener('click', () => {
                this.inputLoad(div);
            });

            resolve(url);
            } else {
            reject(new Error('No se pudo cargar la imagen'));
            }
        });

        xhr.addEventListener('error', () => {
            reject(new Error('Error de red al cargar la imagen'));
        });

        xhr.send();
        }, 2000); // 2 segundos de retraso
    });
    }

    inputLoad(div) {
    const index = this.divs.indexOf(div);
    const input = this.zonas[index];
    input.click();
    }

    async cargarFile(zonas, div) {
    zonas.addEventListener('change', async () => {
        const imagen = zonas.files[0].name;
        try {
        const url = await this.cargarImagen(imagen, div);
        console.log('Imagen cargada:', url);
        } catch (error) {
        console.error('Error al cargar la imagen:', error);
        }
        div.addEventListener('click', () => {
        this.inputLoad(div);
        });
    });
    }

    async dropImage(div) {
    div.addEventListener('drop', async (e) => {
        e.preventDefault();
        const imagen = e.dataTransfer.files[0].name;
        try {
        const url = await this.cargarImagen(imagen, div);
        console.log('Imagen cargada:', url);
    } catch (error) {
        console.error('Error al cargar la imagen:', error);
    }
    div.addEventListener('click', () => {
        this.inputLoad(div);
    });
    });
}

inicioEventos() {
    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((event) => {
    document.addEventListener(event, (e) => e.preventDefault());
    });

    this.divs.forEach((div) => {
    this.dropImage(div);
    this.cargarFile(this.zonas[this.divs.indexOf(div)], div);
    });
}
}

const programa = new cargarImagen();
programa.inicioEventos();
