import { useEffect, useState } from 'react';
import { getProducts, getAllProducts, insertProduct } from '../helpers/Products';



export const useFetchProducts = (category) => {
   
    console.log('category', category)
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getProducts(category).then( imgs => {
            setState({
                data: imgs,
                loading: false
            })

          
        })
       
    }, [category])

   

    return state;
}

export const useFetchAllProducts = () => {
   

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getAllProducts().then( imgs => {
            setState({
                data: imgs,
                loading: false
            });

          
        });
       
    },['']);

   

    return state;
}

export const UseFetchInsertProducts = (product) => {
   

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        insertProduct(product).then( imgs => {
            setState({
                data: imgs,
                loading: false
            });

          
        });
       
    },[product]);

   

    return state;
}