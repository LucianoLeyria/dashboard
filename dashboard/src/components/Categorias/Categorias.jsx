import React, { useEffect, useState } from 'react';
import { CategoriaCard } from '../CategoriaCard/CategoriaCard';
import { FormCategoria } from '../FormCategoria/FormCategoria';
import { Modal } from '../Modal/Modal';
import { useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { useNavigate } from 'react-router-dom';
import styles from './Categorias.module.scss';

export const Categorias = () => {
  const { categories, setCategories } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setModal(true);
  };
  useEffect(() => {
    if (!window.localStorage.getItem('password')) navigate('/ingresar');
    setCategories();
  }, []);

  return (
    <div className={styles.categorias}>
      <h2>Categorias</h2>
      <button className={styles.button} onClick={handleClick}>
        Agregar nueva categoria
      </button>
      {modal ? (
        <Modal setShowModal={setModal}>
          <FormCategoria />
        </Modal>
      ) : null}
      <div className={styles.categoria}>
        {categories.map((c) => {
          return (
            <CategoriaCard
              id={c.id}
              key={c.titulo}
              title={c.titulo}
              subtitle={c.subtitulo}
            />
          );
        })}
      </div>
    </div>
  );
};
