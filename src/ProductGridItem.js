import React from 'react'
import { Card, Container } from 'react-bootstrap'

import './style.css'

export const ProductGridItem = ({ id, nombre, marca, descripcion, precio, imagen, precioDescuento }) => {
    return (
        <Container>
            <Card>
                <Card.Img variant="top" height="300px" width="600px" src={`data:image/jpeg;base64,${imagen}`} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>

                    <Card.Text>
                        ID Producto: {id} <br />
                    Marca: {marca}  <br />
                    Descripción: {descripcion} <br />
                    Precio: {precio}<br />
                    Precio Descuento: {precioDescuento}
                    </Card.Text>





                </Card.Body>
            </Card>
        </Container>
    )
}
