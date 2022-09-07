import { useDispatch } from 'react-redux';
import s from './Modal.module.css';

import { authOperations } from '../../redux/auth';
const Modal = ({ children, setShowModal }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.modal}>
      <p className={s.text}>{children}</p>
      <div className={s.buttons}>
        <button
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
          className="modalYes"
        >
          Yes
        </button>
        <button
          onClick={() => setShowModal(false)}
          type="button"
          className="modalNo"
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Modal;
