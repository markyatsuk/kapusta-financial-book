import Button from '../Button';
import { useDispatch } from 'react-redux';
import s from './Modal.module.css';

import { authOperations } from '../../redux/auth';
const Modal = ({ children, setShowModal }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.modal}>
      <p className={s.text}>{children}</p>
      <div className={s.buttons}>
        <Button type="button" className="modalYes">
          Yes
        </Button>
        <Button
          onClick={() => dispatch(authOperations.logOut())}
          type="button"
          className="modalNo"
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default Modal;
