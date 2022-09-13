import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, setShowModal, onClick }) => {
  return createPortal(
    <div className={s.overlay} onClick={() => setShowModal(false)}>
      <div className={s.modal}>
        <p className={s.text}>{children}</p>
        <div className={s.buttons}>
          <button type="button" onClick={onClick} className={s.modalYes}>
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
