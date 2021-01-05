import { useEffect, useState } from 'react';
import {getProducts} from '../helpers/Products';

export const useFetchProducts = (search) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getProducts(search).then(prod => {


            setState({
                data: prod,
                loading: false
            });
        });
    }, [search]);

    return state;
}
