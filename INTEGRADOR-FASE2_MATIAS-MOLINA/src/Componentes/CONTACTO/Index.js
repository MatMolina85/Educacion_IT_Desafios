
import React, { useState } from 'react';
import axios from 'axios';
import './Index.css';
import { useEffect } from 'react';
import Foto1 from '../imagenes/foto1.jpg';
import Foto2 from '../imagenes/foto2.jpg';
import Foto3 from '../imagenes/foto3.jpg';
import Foto4 from '../imagenes/foto4.jpg';

export function Index() {
    const URL_API_CONTACTO = 'https://653572c7c620ba9358ec7dab.mockapi.io/carrito/';
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [formulario, setFormulario] = useState({
        nombre: '',
        mail: '',
        celular: '',
        localidad: '',
        texto: ''
    });
    const [errores, setErrores] = useState({
        nombre: '',
        mail: '',
        celular: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormulario((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setErrores((prevErrores) => ({
            ...prevErrores,
            [name]: validarCampo(name, value),
        }));
    };

    const images = [Foto1, Foto2, Foto3, Foto4];

    useEffect(() => {
        const showNextImage = () => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
        const intervalId = setInterval(() => {
            showNextImage();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentImageIndex, images.length]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(URL_API_CONTACTO, { formulario });
            console.log('Formulario enviado con éxito:', response.data);
            setFormulario({
                nombre: '',
                mail: '',
                celular: '',
                localidad: '',
                texto: ''
            });
        } catch (error) {
            console.error('Error al enviar el formulario:', error.message);
        }
    };

    const validarCampo = (campo, valor) => {
        switch (campo) {
        case 'nombre':
            return !/^[a-zA-Z\s]{1,20}$/.test(valor) ? 'Nombre inválido' : '';
        case 'mail':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor) ? '' : 'Email inválido';
        case 'celular':
            return !/^[0-9]{10}$/.test(valor) ? 'Celular inválido' : '';
        default:
            return '';
        }
    };
    
    const isFormValid = 
    errores.nombre === '' &&
    errores.mail === '' &&
    errores.celular === '' &&
    formulario.nombre !== '' &&
    formulario.mail !== '' &&
    formulario.celular !== '' &&
    /^[a-zA-Z\s]{1,20}$/.test(formulario.nombre) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.mail) &&
    /^[0-9]{10}$/.test(formulario.celular);

    return (
        <div className="contacto">
            <h1>Contacto</h1>
            <div className="contenedor">
                <div className="contenedor-formulario">
                    <form onSubmit={handleSubmit} className="form" id="SecContact">
                        <div className="contenedor-input">
                            <input
                                type="text"
                                className="input"
                                name="nombre"
                                value={formulario.nombre}
                                onChange={handleChange}
                                placeholder="a"
                            />
                            <label htmlFor="nombre" className="label">
                                Nombre
                            </label>
                            <span className="mensaje-error">{errores.nombre}</span>
                        </div>
                        <div className="contenedor-input">
                            <input
                                type="text"
                                className="input"
                                name="mail"
                                value={formulario.mail}
                                onChange={handleChange}
                                placeholder="a"
                            />
                            <label htmlFor="mail" className="label">
                                Mail
                            </label>
                            <span className="mensaje-error">{errores.mail}</span>
                        </div>
                        <div className="contenedor-input">
                            <input
                                type="number"
                                className="input"
                                name="celular"
                                value={formulario.celular}
                                onChange={handleChange}
                                placeholder="a"
                            />
                            <label htmlFor="celular" className="label">
                                Celular
                            </label>
                            <span className="mensaje-error">{errores.celular}</span>
                        </div>
                        <div className="contenedor-input">
                            <input
                                type="text"
                                className="input"
                                name="localidad"
                                value={formulario.localidad}
                                onChange={handleChange}
                                placeholder="a"
                            />
                            <label htmlFor="localidad" className="label">
                                Localidad
                            </label>
                        </div>
                        <div className="contenedor-texto">
                            <textarea
                                name="texto"
                                id="textarea"
                                cols="50"
                                rows="10"
                                value={formulario.texto}
                                onChange={handleChange}
                                resize="none"
                            ></textarea>
                        </div>
                        <input
                            type="submit"
                            className="submitBtn"
                            value="Enviar"
                            onChange={handleChange}
                            disabled={!isFormValid}
                        />
                    </form>
                    <div className="informacion">
                        <div className="detalle">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Imagen ${index + 1}`}
                                    style={{ display: index === currentImageIndex ? 'block' : 'none' }}
                                />
                            ))}
                        </div>
                        <div className='texto-info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta laudantium iure voluptatem itaque deleniti! Deleniti, quae qui, cupiditate perferendis, perspiciatis unde explicabo impedit illum reiciendis et magni deserunt praesentium. Nihil libero assumenda
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}