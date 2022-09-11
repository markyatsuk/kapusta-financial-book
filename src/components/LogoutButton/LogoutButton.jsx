import s from './LogoutButton.module.css';
import Modal from '../Modal';
import { useState } from 'react';

const LogoutButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={s.btn}
        onClick={() => setShowModal(true)}
      >
        {/* <svg className="icon">
          <use href="./sprite.svg#icon-logout"></use>
        </svg> */}
        Exit
      </button>
      {showModal ? (
        <Modal setShowModal={setShowModal}>Do you really want to leave?</Modal>
      ) : null}
    </div>
  );
};

export default LogoutButton;
