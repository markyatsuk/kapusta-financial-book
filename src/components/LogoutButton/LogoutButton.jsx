import { Mobile, Default } from '../../services/mediaQuery';
import logoutsvg from '../../images/svg/header/logout-btn.svg';
import s from './LogoutButton.module.css';
import Modal from '../Modal/Modal';
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
        <Mobile>
          <svg className={s.icon}>
            <use href={`${logoutsvg}#Capa_1`} />
          </svg>
        </Mobile>

        <Default>
          <p className={s.text}>Log out</p>
        </Default>
      </button>
      {showModal ? (
        <Modal setShowModal={setShowModal}>Do you really want to leave?</Modal>
      ) : null}
    </div>
  );
};

export default LogoutButton;
