import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { ProductGridItem } from '../../ProductGridItem'



export const ProductScreen = (search) => {


    console.log(search)

    const { search: test } = search;

    const { data: images, loading } = useFetchProducts(test);

    console.log(images)
    return (
        <>



            {loading && <p>Loading</p>}

          
                {
                    images.map(img => (
                        <ProductGridItem
                            key={img.id}
                            id={img.id}
                            nombre={img.nombre}
                            marca={img.marca}
                            descripcion={img.descripcion}
                            imagen={img.imagen}
                            precio={img.precio}
                            precioDescuento={img.precioDescuento} />
                    ))
                }
           

        </>
    )
}



