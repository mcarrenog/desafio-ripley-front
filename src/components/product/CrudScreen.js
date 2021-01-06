import React, { useState } from 'react'
import ProductTable from './ProductTable'
import { v4 as uuidv4 } from 'uuid';
import '../../CrudScreen.css'

import { useFetchAllProducts, UseFetchInsertProducts } from '../../hooks/useFetchProducts'
import { AddProductForm } from './AddProductForm'
import { EditProductForm } from './EditProductForm'

export const CrudScreen = () => {

    const { data: results, loading } = useFetchAllProducts();

    const [products, setProducts] = useState(results);

    //add Product
    const addProduct = function (product) {
        product._id = uuidv4();

        setProducts([...products, product]);
        //llamar a api metodo post
        localStorage.setItem('product', JSON.stringify(product));
    }

    //delete Product
    const deleteProduct = (id) => {
        console.log(id)
        //llamar a api metodo delete
        setProducts(products.filter(product => product.id !== id));
    }

    //Edit Product
    const [editing, setEditing] = useState(false);

    const [currentProduct, setCurrentProduct] = useState({
        
        id: null,
        nombre: '',
        marca: '',
        descripcion: '',
        precio: '',
        imagen: '',
    })

    const editRow = (product) => {
        setEditing(true);
        setCurrentProduct({
            
            id: product.id,
            nombre: product.nombre,
            marca: product.marca,
            descripcion: product.descripcion,
            precio: product.precio,
            imagen: product.imagen,
        })
    }

    const updateProduct = (id, updatedProduct) => {
        setEditing(false);

        setProducts(products.map( product => (product.id === id ? updatedProduct : product)))
    }

    let retrievedObject = localStorage.getItem('product');

    let cleanObejct = JSON.parse(retrievedObject);

    console.log(cleanObejct)


    //const { data, loading: load } = UseFetchInsertProducts(cleanObejct);




    return (
        <div className="container">
            <h1>CRUD</h1>
            <div className="flex-row">
                <div className="flex-large">

                    {
                        editing ? (
                            <div>
                                <h2>Editar Producto</h2>
                                <EditProductForm currentProduct={currentProduct} updateProduct={updateProduct}/>
                            </div>
                        ) : (
                                <div>
                                    <h2>Agregar Producto</h2>
                                    <AddProductForm addProduct={addProduct} />
                                </div>)
                    }




                </div>
                <div className="flex-large">
                    <h2>Productos</h2>
                    <ProductTable results={results} deleteProduct={deleteProduct}  editRow={editRow} />
                </div>
            </div>
        </div>
    )
}
