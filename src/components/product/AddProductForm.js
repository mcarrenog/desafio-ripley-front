import React from 'react'
import { useForm } from 'react-hook-form';


export const AddProductForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {

      //  data.imagen = localStorage.getItem('productImage');
        console.log(data);

        props.addProduct(data);


        e.target.reset();
    }

    const onChange = (e) => {

        let file = e.target.files[0]
        console.log('file to upload: ', file);
        if (file) {
            const reader = new FileReader();

            reader.onload = handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }

    const handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;

        
          localStorage.setItem('productImage', btoa(binaryString)) ;
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
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
            <input type="file" name="imagen" accept=".jpg" onChange={(e) => onChange(e)} />

     

            <br /><br />
            <button>Agregar Nuevo Producto</button>
        </form>
    )
}

export default AddProductForm;