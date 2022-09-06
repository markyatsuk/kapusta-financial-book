import Button from '../Button';

import s from './Modal.module.css';

const Modal = ({ children, setShowModal }) => (
  <div className={s.modal}>
    <p className={s.text}>{children}</p>
    <div className={s.buttons}>
      <Button type="button" className="modalYes">
        Yes
      </Button>
      <Button type="button" onClick={setShowModal(false)} className="modalNo">
        No
      </Button>
    </div>
  </div>
);

export default Modal;
