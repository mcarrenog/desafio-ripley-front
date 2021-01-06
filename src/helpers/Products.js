

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
    const url = `http://localhost:3000/products`

    var params = {
        id: data.id,
        nombre: data.nombre,
        marca: data.marca,
        descripcion: data.descripcion,
        precio: data.precio,
        imagen: data.imagen
    };

    var formBody = [];
    for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");


    var request = {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

            'Accept': 'application/json; charset=utf-8'
        },
        body: formBody
    };

    const response = await fetch(url, request);

    return response.json();
}

export const updProduct = async (id, data = {}) => {

    const url = `http://localhost:3000/products/${id}`

    console.log(url)

    var params = {
        nombre: data.nombre,
        marca: data.marca,
        descripcion: data.descripcion,
        precio: data.precio,
        imagen: data.imagen
    };

    var formBody = [];
    for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");


    var request = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

            'Accept': 'application/json; charset=utf-8'
        },
        body: formBody
    };

    const response = await fetch(url, request);

    return response.json();
}

export const delProduct = async (id) => {

    const url = `http://localhost:3000/products/${id}`
  
    const resp = await fetch(url, {
        method:'DELETE',
        origin: '*'
    });


    const { results } = await resp.json();

    return results;
}
