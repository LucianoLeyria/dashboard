import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
      <Link to='/categorias'>Categorias</Link>
      <Link to='/productos'>Productos</Link>
    </div>
  );
};
