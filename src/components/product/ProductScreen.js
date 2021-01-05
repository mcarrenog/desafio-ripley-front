import React from 'react'
import { useFetchProducts } from '../../hooks/useFetchProducts'
import { ProductGridItem } from '../../ProductGridItem'



export const ProductScreen = (search) => {

    const { data, loading } = useFetchProducts('otto');

    console.log(data);

    return (
        <>
            <h1>Product Screen</h1>


            {loading && <p>Loading</p>}

            <div className="card-grid">
                {
                    data.map(prod => (

                        <ProductGridItem key={prod.id}
                            {...prod} />
                    ))

                }
            </div>

        </>
    )
}
