import React, { useState, useContext, useRef } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Swal from 'sweetalert2';
import { subirImagen } from '../../Fetchs';
import styles from './FormEditProduct.module.scss';

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

  const handleUploadImage = async () => {
    const res = await subirImagen(inputImage.current.files[0]);
    setProducto({ ...producto, imagen: `${url}${res.url}` });
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <label className={styles.label}>
        Título de producto
        <input
          type="text"
          onChange={handleChange}
          name="titulo"
          value={producto.titulo}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Descripción
        <textarea
          type="text"
          onChange={handleChange}
          name="descripcion"
          value={producto.descripcion}
          className={styles.text}
        />
      </label>
      <label className={styles.label}>
        Precio
        <input
          type="number"
          onChange={handleChange}
          name="precio"
          value={producto.precio}
          className={styles.input}
        />
      </label>
      <select
        onChange={handleChange}
        name="categoriaId"
        id="categoriaId"
        defaultValue={producto.categoriaId}
        className={styles.select}
      >
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.id}>
              {category.titulo}
            </option>
          );
        })}
      </select>
      <div className={styles.img}>
        <img className="img" src={producto.imagen} alt="imagen" />
      </div>
      <input
        type="file"
        id="imagen"
        name="imagen"
        onChange={handleUploadImage}
        ref={inputImage}
        className={styles.inputFile}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
};
