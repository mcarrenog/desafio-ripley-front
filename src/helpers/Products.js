

export const getProducts = async (search) => {

    //const url = `https://mcarreno-desafio-ripley-back.herokuapp.com/products?search=${search}`;
    const url = `http://localhost:3000/products?search=${encodeURI(search)}`;

    const resp = await fetch(url, {

        origin: '*'
    });


    const { results } = await resp.json();



    return results;

}

export const getAllProducts = async () => {

    //const url = `https://mcarreno-desafio-ripley-back.herokuapp.com/products?search=${search}`;
    const url = `http://localhost:3000/getAllProducts`;

    const resp = await fetch(url, {

        origin: '*'
    });


    const { products } = await resp.json();



    return products;

}

// export const insertProduct = async (data) => {

//     const url = `http://localhost:3000/products`
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     });

//     return response.json();
// }

export const insertProduct = async (data) => {

    console.log('data', data)


    const url = `http://localhost:3000/products`


    var formData = new FormData();

    for (var k in data) {
        formData.append(k, data[k]);
    }

    var request = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    };

    const response = await fetch(url, request);

    return response.json();
}

export const updateProduct = async (id, data = {}) => {

    const url = `http://localhost:3000/products/${id}`
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)
    });

    return response.json();
}

export const deleteProduct = async (id) => {

    const url = `http://localhost:3000/products/${id}`
    const response = await fetch(url, {
        method: 'DELETE',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

    return response.json();
}
