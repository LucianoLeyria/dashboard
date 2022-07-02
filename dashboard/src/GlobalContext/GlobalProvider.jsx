import React, { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { reducer } from './GlobalReducer';
import {
  obtenerCategorias,
  agregarCategorias,
  borrarCategorias,
  modificarCategorias,
  obtenerProductos,
  agregarProductos,
  borrarProductos,
  modificarProductos,
} from '../Fetchs';
import {
  GET_CATEGORIES,
  DELETE_CATEGORIES,
  ADD_CATEGORIES,
  MODIFY_CATEGORIES,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
  MODIFY_PRODUCTS,
  ADD_PRODUCTS,
} from './types';

export const ContextProvider = ({ children }) => {
  // Estado inicial
  const initialState = {
    categories: [],
    products: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  ///funciones que modifican estados
  const setCategories = () => {
    obtenerCategorias()
      .then((data) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const addCategories = (categoria) => {
    agregarCategorias(categoria)
      .then((data) => {
        dispatch({
          type: ADD_CATEGORIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const deleteCategories = (id) => {
    borrarCategorias(id)
      .then((data) => {
        dispatch({
          type: DELETE_CATEGORIES,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

  const modifyCategories = (id, categoriaModificada) => {
    modificarCategorias(id, categoriaModificada)
      .then((data) => {
        dispatch({
          type: MODIFY_CATEGORIES,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const getProducts = () => {
    obtenerProductos()
      .then((data) => {
        dispatch({
          type: GET_PRODUCTS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const addProducts = (producto) => {
    agregarProductos(producto)
      .then((data) => {
        dispatch({
          type: ADD_PRODUCTS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  const deleteProducts = (id) => {
    borrarProductos(id)
      .then((data) => {
        dispatch({
          type: DELETE_PRODUCTS,
          payload: id,
        });
      })
      .catch((err) => console.log(err));
  };

  const modifyProducts = (id, productoModificado) => {
    modificarProductos(id, productoModificado)
      .then((data) => {
        dispatch({
          type: MODIFY_PRODUCTS,
          payload: data,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <GlobalContext.Provider
        value={{
          categories: state.categories,
          products: state.products,
          cart: state.cart,
          setCategories,
          addCategories,
          deleteCategories,
          modifyCategories,
          getProducts,
          addProducts,
          deleteProducts,
          modifyProducts,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};
