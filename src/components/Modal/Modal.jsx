import { useDispatch } from 'react-redux';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { authOperations } from '../../redux/auth';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, setShowModal }) => {
  const dispatch = useDispatch();

  return createPortal(
    <div className={s.overlay} onClick={() => setShowModal(false)}>
      <div className={s.modal}>
        <p className={s.text}>{children}</p>
        <div className={s.buttons}>
          <button
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
            className={s.modalYes}
          >
            Yes
          </button>
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className={s.modalNo}
          >
            No
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
