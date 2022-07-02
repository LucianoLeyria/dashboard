import React, { useState, useRef } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Swal from 'sweetalert2';
import { subirImagen } from '../../Fetchs';

export const ProductForm = () => {
  const { addProducts, categories } = useContext(GlobalContext);
  const [producto, setProducto] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    imagen: '',
    categoriaId: '',
  });

  const inputImage = useRef(null);
  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    const url = import.meta.env.VITE_APP_URL;
    e.preventDefault();
    const imagen = await subirImagen(inputImage.current.files[0]);
    await addProducts({ ...producto, imagen: url + imagen.url });
    Swal.fire({
      title: 'Exitoso!',
      text: 'Haz click para continuar',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
    window.location.reload();
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
        <input
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
        <select onChange={handleChange} name='categoriaId' id='categorias'>
          <option value='-1'>Todas</option>
          {categories.map((c) => {
            return (
              <option value={c.id} key={c.id}>
                {c.titulo}
              </option>
            );
          })}
        </select>
        <label>Imagen</label>
        <input
          ref={inputImage}
          type='file'
          name='imagen'
          onChange={handleChange}
          value={producto.imagen}
        />
        <button
          disabled={
            !producto.titulo ||
            !producto.descripcion ||
            !producto.precio ||
            !producto.imagen ||
            !producto.categoriaId
          }
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
