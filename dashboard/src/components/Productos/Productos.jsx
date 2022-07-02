import { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import { Modal } from '../Modal/Modal';
import { ProductForm } from '../ProductForm/ProductForm';
import { ProductosCard } from '../ProductosCard/ProductosCard';
import { filterOptions } from './service';
import { useNavigate } from 'react-router-dom';

export const Productos = () => {
  const { getProducts, setCategories, categories, products } =
    useContext(GlobalContext);

  const [select, setSelect] = useState('-1');
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.localStorage.getItem('password')) navigate('/ingresar');
    setCategories();
    getProducts();
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const handleClick = () => {
    setModal(true);
  };

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={handleClick}>Agregar nuevo producto</button>
      <label htmlFor='categorias'>Categorias</label>
      <select onChange={handleChange} name='categorias' id='categorias'>
        <option value='-1'>Todas</option>
        {categories.map((c) => {
          return (
            <option value={c.id} key={c.id}>
              {c.titulo}
            </option>
          );
        })}
      </select>
      {modal ? (
        <Modal setShowModal={setModal}>
          <ProductForm />
        </Modal>
      ) : null}
      <div>
        {filterOptions(select, products)?.map((p) => {
          return (
            <ProductosCard
              id={p?.id}
              key={p?.id}
              title={p?.titulo}
              description={p?.descripcion}
              price={p?.precio}
              image={p?.imagen}
              categoryId={p?.categoriaId}
            />
          );
        })}
      </div>
    </div>
  );
};
