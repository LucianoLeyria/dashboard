import React, { useState } from 'react';
import { CategoriaCard } from '../CategoriaCard/CategoriaCard';
import { FormCategoria } from '../FormCategoria/FormCategoria';
import { Modal } from '../Modal/Modal';

export const Categorias = () => {
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(true);
  };

  const categorias = [
    {
      title: 'promos',
      subtitle: 'las mejores promos',
      image:
        'https://st.depositphotos.com/1186248/4216/i/450/depositphotos_42167223-stock-photo-promo.jpg',
    },
    {
      title: 'hamburguesas',
      subtitle: 'las mejores hamburguesas',
      image: 'https://www.clarin.com/img/2021/06/17/LC25eDtCT_1200x630__1.jpg',
    },
  ];

  return (
    <div>
      <h1>Categorias</h1>
      <button onClick={handleClick}>Agregar nueva categoria</button>
      {modal ? (
        <Modal setShowModal={setModal}>
          {' '}
          <FormCategoria />{' '}
        </Modal>
      ) : null}
      <div>
        {' '}
        {categorias.map((c) => {
          return (
            <CategoriaCard
              key={c.title}
              title={c.title}
              subtitle={c.subtitle}
              image={c.image}
            />
          );
        })}
      </div>
    </div>
  );
};
