import React, { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import styles from './FormCategoria.module.scss';
import Swal from 'sweetalert2';

export const FormCategoria = () => {
  const { addCategories } = useContext(GlobalContext);
  const [categoria, setCategoria] = useState({
    titulo: '',
    subtitulo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategories(categoria);

    Swal.fire({
      title: 'Exitoso!',
      text: 'Haz click para continuar',
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  const handleChange = (e) => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Título de categoría
        <input
          type="text"
          onChange={handleChange}
          name="titulo"
          value={categoria.titulo}
        />
      </label>
      <label>
        Subtitulo
        <input
          type="text"
          onChange={handleChange}
          name="subtitulo"
          value={categoria.subtitulo}
        />
      </label>
      {!categoria.titulo && <p>Necesitas ingresar un título</p>}
      <button disabled={!categoria.titulo}>Enviar</button>
    </form>
  );
};
