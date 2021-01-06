import React, { useState } from 'react'

export const ProductTable = (props) => {

    console.log(props.results)


    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Marca</th>
                    <th>Descripción</th>
                    <th>Precio</th>

                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.results.length > 0 ?
                        props.results.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.nombre}</td>
                                <td>{product.marca}</td>
                                <td>{product.descripcion}</td>
                                <td>{product.precio}</td>
                                <td>
                                    <button className="button muted-button" onClick={() => {props.editRow(product)}}>Editar</button>&nbsp;
                                <button className="button muted-button" onClick={() => {props.deleteProduct(product.id)}}>Eliminar</button>
                                </td>
                            </tr>
                        )) : (<tr>
                            <td key={6} colSpan={6}>No Existen Productos</td>
                        </tr>
                        )
                }

            </tbody>
        </table>
    )
}

export default ProductTable