import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
export const Modal = ({ children, setShowModal }) => {
  const functionModal = () => {
    setShowModal((prev) => !prev);
  };

  const div = document.getElementById('modal');
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_container}>
        <button className={styles.button} onClick={functionModal}>
          <FaArrowLeft />
        </button>
        {children}
      </div>
    </div>,
    div
  );
};
