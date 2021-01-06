import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';

export const ProductGridItem = ({ id, nombre, marca, descripcion, precio, imagen, precioDescuento }) => {

    let getStyle = () => {
        if (precioDescuento === undefined) {
            return { textDecoration: 'none' };
        }
        else {
            return {
                textDecoration: 'line-through'
            }
        }
    }

    let applyDiscount = () => {
        if (precioDescuento !== undefined) {
            return { color: 'red', display: 'block' }
        }
        else {
            return { display: 'none' }
        }

    }

    return (

        <div className="container py-5">

            <div className="row">
                <div className="col-lg-8 mx-auto">

                    <ul className="list-group shadow">

                        <li className="list-group-item">

                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                    <h5 className="mt-0 font-weight-bold mb-2" style={{color: "black"}}>Nombre: {nombre}</h5>
                                    <p className="font-italic text-muted mb-0 small">id: {id}</p>
                                    <p className="font-italic text-muted mb-0 small">Marca: {marca}</p>
                                    <p className="font-italic text-muted mb-0 small">Descripción: {descripcion}</p>
                                    <div className="justify-content-between mt-1">

                                        <h6 className="font-italic text-muted mb-0 small" style={getStyle()}>Precio{` $${precio}`}</h6> 
                                        

                                        <p className="font-italic text-muted mb-0" style={applyDiscount()}>Precio Descuento{` $${precioDescuento}`}</p>
                                        <ul className="list-inline small">
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star text-success"></i></li>
                                            <li className="list-inline-item m-0"><i className="fa fa-star-o text-gray"></i></li>
                                        </ul>
                                    </div>
                                </div><img src={`data:image/jpeg;base64,${imagen}`} alt={nombre} width="200" className="ml-lg-5 order-1 order-lg-2" />
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
