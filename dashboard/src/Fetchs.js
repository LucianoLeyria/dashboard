export const subirImagen = async (imagen) => {
  let data = new FormData();
  data.append('imagen', imagen);
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/imagen`, {
    method: 'POST',
    body: data,
  });
  let imagenRes = await res.json();
  console.log('CL DEL FETCH', imagenRes);
  return imagenRes;
};

export const obtenerCategorias = async () => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/categorias`);
  let categorias = await res.json();
  return categorias;
};

export const agregarCategorias = async (categoria) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/categorias`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoria),
  });
  let categoriaRes = await res.json();
  return categoriaRes;
};

export const borrarCategorias = async (id) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/categorias/${id}`, {
    method: 'DELETE',
  });
  let categoriaBorrada = await res.json();
  return categoriaBorrada;
};

export const modificarCategorias = async (id, categoriaModificada) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/categorias/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoriaModificada),
  });
  let categoriaModificadaRes = await res.json();
  return categoriaModificadaRes;
};

export const obtenerProductos = async () => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/productos`);
  let productos = await res.json();

  return productos;
};

export const agregarProductos = async (producto) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/productos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(producto),
  });
  let productoRes = await res.json();
  console.log('PRODUCTOAGREGAR', productoRes);
  return productoRes;
};

export const borrarProductos = async (id) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/productos/${id}`, {
    method: 'DELETE',
  });
  let productoBorrado = await res.json();
  return productoBorrado;
};

export const modificarProductos = async (id, productoModificado) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/productos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productoModificado),
  });
  let productoModificadoRes = await res.json();
  return productoModificadoRes;
};

export const validarPassword = async (password) => {
  const url = import.meta.env.VITE_APP_DB;
  let res = await fetch(`${url}/auth/ingresar`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  });
  let loginRes = await res.json();
  console.log('PRODUCTOAGREGAR', loginRes);
  return loginRes;
};
