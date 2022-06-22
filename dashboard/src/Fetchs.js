export const subirImagen = async (imagen) => {
  let data = new FormData();
  data.append('imagen', imagen);
  const url = import.meta.env.VITE_APP_URL;
  let res = await fetch(`${url}/imagen`, {
    method: 'POST',
    body: data,
  });
  let imagenRes = await res.json();
};
