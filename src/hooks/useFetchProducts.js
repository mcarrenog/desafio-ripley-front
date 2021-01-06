import { useEffect, useState } from 'react';
import { getProducts } from '../helpers/Products';

// export const caca = (search) => {

//     console.log(`useFetch: ${search}`)

//     const [state, setState] = useState({
//         data: [],
//         loading: true
//     });

//     useEffect(() => {
//         getProducts(search).then(prod => {


//             setState({
//                 data: prod,
//                 loading: false
//             });
//         });
//     }, [search]);

//     return state;
// }


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

            console.log(imgs)
        })
       
    }, [category])

   

    return state;
}