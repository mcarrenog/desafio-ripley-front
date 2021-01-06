
import React from 'react'
import { useForm } from 'react-hook-form';
import { UseFetchInsertProducts } from '../../hooks/useFetchProducts'

export const EditProductForm = (props) => {

    //console.log(props.currentProduct)
    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentProduct
    });

    setValue('id', props.currentProduct.id);
    setValue('nombre', props.currentProduct.nombre);
    setValue('marca', props.currentProduct.marca);
    setValue('descripcion', props.currentProduct.descripcion);
    setValue('precio', props.currentProduct.precio);
    setValue('imagen', props.currentProduct.imagen);

    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.currentProduct.id;
        props.updateProduct(props.currentProduct.id, data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>ID</label>
            <input type="text" name="id" ref={
                register({
                    required: {
                        value: true, message: 'Campo Obligatorio'
                    }
                })
            } />
            <div>{errors?.id?.message}</div>
            <label>Nombre</label>
            <input type="text" name="nombre" ref={
                register({
                    required: {
                        value: true, message: 'Campo Obligatorio'
                    }
                })
            } />
            <div>{errors?.nombre?.message}</div>
            <label>Marca</label>
            <input type="text" name="marca" ref={
                register({
                    required: {
                        value: true, message: 'Campo Obligatorio'
                    }
                })
            } />
            <div>{errors?.marca?.message}</div>
            <label>Descripción</label>
            <input type="text" name="descripcion" ref={
                register({
                    required: {
                        value: true, message: 'Campo Obligatorio'
                    }
                })
            } />
            <div>{errors?.descripcion?.message}</div>
            <label>Precio</label>
            <input type="text" name="precio" ref={
                register({
                    required: {
                        value: true, message: 'Campo Obligatorio'
                    }
                })
            } />
            <div>{errors?.precio?.message}</div>

            <label>Imagen</label>
            <input type="text" name="imagen" />

            <button>Editar Producto</button>
        </form>
    )
}

export default EditProductForm;