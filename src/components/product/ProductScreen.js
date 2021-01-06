import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { ProductGridItem } from '../../ProductGridItem'



export const ProductScreen = (search) => {


    console.log(search)

const {search: test} = search;

    const { data: images, loading } = useFetchProducts(test);

    console.log(images)
    return (
        <>
            <h1>{test}</h1>


            {loading && <p>Loading</p>}

            <div className="card-grid">
            {
                images.map(img => (
                    <ProductGridItem
                        key={img.id}
                        {...img} />
                ))
            }
            </div>

        </>
    )
}



