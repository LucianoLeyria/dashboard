import { useEffect, useState } from 'react';
import { validarPassword } from '../../Fetchs';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const FormPw = () => {
  const [password, setPassword] = useState('');
  const defaultPassword = import.meta.env.VITE_APP_PW;
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const pw = await validarPassword(password);
    if (pw.esValida) {
      window.localStorage.setItem('password', password);
      navigate('/categorias');
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'Reintentar',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='contraseña'>Ingrese contraseña para acceder</label>
        <input
          type='text'
          onChange={handleChange}
          name='contraseña'
          id='contraseña'
          value={password}
        />
        <button>Ingresar</button>
      </form>
    </div>
  );
};
