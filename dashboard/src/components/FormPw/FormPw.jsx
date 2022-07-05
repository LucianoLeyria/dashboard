import { useState } from 'react';
import { validarPassword } from '../../Fetchs';
import Swal from 'sweetalert2';
import styles from './FormPw.module.scss';
import { useNavigate } from 'react-router-dom';

export const FormPw = () => {
  const [password, setPassword] = useState('');
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="contraseña" className={styles.form_label}>
        Ingrese contraseña para acceder
        <input
          type="text"
          onChange={handleChange}
          name="contraseña"
          id="contraseña"
          value={password}
          className={styles.form_input}
        />
      </label>
      <button className={styles.form_button}>Ingresar</button>
    </form>
  );
};
