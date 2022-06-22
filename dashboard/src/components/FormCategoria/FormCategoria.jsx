import React, { useRef, useState } from 'react';
import { subirImagen } from '../../Fetchs';

export const FormCategoria = () => {
  const guardarImagen = useRef(null);

  const [categoria, setCategoria] = useState({
    nombre: '',
    subtitulo: '',
    imagen: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let imagen = guardarImagen.current.files[0];
    if (imagen && imagen.size < 1048576) {
      subirImagen(imagen);
    }
  };

  const handleChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType='multipart/form-data'>
        <label>Nombre de categoria </label>
        <input
          type='text'
          onChange={handleChange}
          name='nombre'
          value={categoria.nombre}
        />
        <label>Subtitulo</label>
        <input
          type='text'
          onChange={handleChange}
          name='subtitulo'
          value={categoria.subtitulo}
        />
        <label>Imagen</label>
        <input
          type='file'
          accept='.png, .jpg, .jpeg, .webp, .svg'
          ref={guardarImagen}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
