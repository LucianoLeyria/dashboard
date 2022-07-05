import { useContext, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Swal from 'sweetalert2';
import { Modal } from '../Modal/Modal';
import { FormEditProduct } from '../FormEditProduct/FormEditProduct';
import styles from './ProductosCard.module.scss';

export const ProductosCard = ({
  id,
  title,
  description,
  image,
  price,
  categoryId,
}) => {
  const { deleteProducts } = useContext(GlobalContext);
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    Swal.fire({
      title: '¿Quieres eliminar el producto?',
      showDenyButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProducts(id);
        Swal.fire('Exitoso', '', 'success');
      }
    });
  };

  const handleEditClick = () => {
    setModal(true);
  };

  return (
    <section className={styles.producto}>
      <div className={styles.product_info}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <div className={styles.editarEliminar}>
          <button className={styles.eliminar} onClick={handleClick}>
            <RiDeleteBinLine />
          </button>
          <button onClick={handleEditClick} className={styles.editar}>
            <AiFillEdit />
          </button>
        </div>
      </div>
      <div className={styles.img}>
        <img src={image} alt="" />
      </div>
      {modal ? (
        <Modal setShowModal={setModal}>
          <FormEditProduct
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            image={image}
            categoryId={categoryId}
          />
        </Modal>
      ) : null}
    </section>
  );
};
