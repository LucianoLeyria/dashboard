import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Swal from 'sweetalert2';
import { subirImagen } from '../../Fetchs';
import '../FormEditProduct/FormEditProduct.css';

export const FormEditProduct = ({
  title,
  description,
  price,
  image,
  categoryId,
  id,
}) => {
  const { modifyProducts, categories } = useContext(GlobalContext);
  const [producto, setProducto] = useState({
    titulo: title,
    descripcion: description,
    precio: price,
    imagen: image,
    categoriaId: categoryId,
  });
  const url = import.meta.env.VITE_APP_URL;
  const inputImage = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    modifyProducts(id, { ...producto });
    Swal.fire({
      title: 'Exitoso!',
      text: 'Haz click para continuar',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };
  console.log('IMG', producto.imagen);

  const handleUploadImage = async () => {
    const res = await subirImagen(inputImage.current.files[0]);
    setProducto({ ...producto, imagen: `${url}${res.url}` });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <label>Título de producto</label>
        <input
          type='text'
          onChange={handleChange}
          name='titulo'
          value={producto.titulo}
        />
        <label>Descripción</label>
        <textarea
          type='text'
          onChange={handleChange}
          name='descripcion'
          value={producto.descripcion}
        />
        <label>Precio</label>
        <input
          type='number'
          onChange={handleChange}
          name='precio'
          value={producto.precio}
        />
        <select
          onChange={handleChange}
          name='categoriaId'
          id='categoriaId'
          defaultValue={producto.categoriaId}
        >
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.titulo}
              </option>
            );
          })}
        </select>
        <img className='img' src={producto.imagen} alt='imagen' />
        <input
          type='file'
          id='imagen'
          name='imagen'
          onChange={handleUploadImage}
          ref={inputImage}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
