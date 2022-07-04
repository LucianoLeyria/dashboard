import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
export const Menu = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/categorias">Categorias</Link>
      <Link to="/productos">Productos</Link>
    </nav>
  );
};
