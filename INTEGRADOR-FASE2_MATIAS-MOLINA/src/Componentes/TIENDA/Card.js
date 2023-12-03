import React, { useState } from "react";
import './Card.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export const Card = props => {

    const { producto, agregarCarritoID } = props
    const [cantidad, setCantidad] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1]= useState(false);

    const incrementarProducto = () => {
        setCantidad(cantidad + 1);
    };

    const restarProducto = () => {
    if (cantidad >= 1) {
        setCantidad(cantidad - 1);
    }
    };

    const agregarCarrito = () => {
        if (cantidad > 0 && cantidad <= producto.stock) {
            agregarCarritoID(producto.id, cantidad);
            setShowModal(true);
        } else {
           
            setShowModal1(true);
        }
    };


    const cerrarModal = () => {
    setShowModal(false);
    setShowModal1(false);
    };



    return (
        <div className="Card">
            <section>
                <h3>{producto.nombre}</h3>
                <img src={producto.foto} alt="" />
                <p><b className="precio">Precio: </b>${producto.precio}</p>
                <p><b>Stock: </b>{producto.stock}</p>
                <p><b>Marca: </b>{producto.marca}</p>
                <p><b>Categoría: </b>{producto.categoria}</p>
                <p><b>Detalles: </b>{producto.detalles}</p>
                <br />
                <p><b style={{color:'gold'}}>Envío: </b>{producto.envio? 'Si' : 'No'}</p>
                <br />
                <div className="botones">
                    <button className="botonesCards" onClick={restarProducto}>-</button>
                    <span className="cantidad">{cantidad}</span>
                    <button className="botonesCards" onClick={incrementarProducto}>+</button>
                    <button className="botonesCardsAgregar" onClick={agregarCarrito}>¡Agregar!</button>
                </div>

                <Modal show={showModal} onHide={cerrarModal}>
                <Modal.Header closeButton>
                <Modal.Title>Agregado!</Modal.Title>
                </Modal.Header>
                <Modal.Body > Se agrego el producto al carrito. </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={cerrarModal}>
                    Cerrar
                </Button>
                </Modal.Footer>
                </Modal>
                <Modal show={showModal1} onHide={cerrarModal}>
                    <Modal.Header closeButton>
                    <Modal.Title>Problema</Modal.Title>
                    </Modal.Header>
                    <Modal.Body > La cantidad debe ser mayor a 0 y menor o igual al stock disponible. </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={cerrarModal}>
                        Cerrar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </section>
            </div>
    )
}