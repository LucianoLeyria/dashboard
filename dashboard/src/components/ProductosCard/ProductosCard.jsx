import { useContext, useState } from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContext/GlobalContext';
import Swal from 'sweetalert2';
import { Modal } from '../Modal/Modal';
import { FormEditProduct } from '../FormEditProduct/FormEditProduct';
import '../ProductosCard/ProductosCard.css';

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
      confirmButtonText: 'Yes',
      denyButtonText: 'Cancel',
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
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>${price}</h3>
      <img className='img' src={image} alt='' />
      <button onClick={handleClick}>
        <RiDeleteBinLine />
      </button>
      <button>
        <AiFillEdit onClick={handleEditClick} />
      </button>
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
    </div>
  );
};
