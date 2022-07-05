import React, { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Swal from 'sweetalert2';
import styles from './FormEditCategory.module.scss';

export const FormEditCategory = ({ id, title, subtitle }) => {
  const { modifyCategories } = useContext(GlobalContext);
  const [categoria, setCategoria] = useState({
    titulo: title,
    subtitulo: subtitle,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    modifyCategories(id, categoria);

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
      <label className={styles.label}>
        Título de categoría
        <input
          type="text"
          onChange={handleChange}
          name="titulo"
          value={categoria.titulo}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Subtitulo
        <input
          type="text"
          onChange={handleChange}
          name="subtitulo"
          value={categoria.subtitulo}
          className={styles.input}
        />
      </label>

      {!categoria.titulo && (
        <p className={styles.warning}>Necesitas ingresar un título</p>
      )}
      <button className={styles.button} disabled={!categoria.titulo}>
        Enviar
      </button>
    </form>
  );
};
