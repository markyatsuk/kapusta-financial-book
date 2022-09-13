import s from './LogoutButton.module.css';
import Modal from '../../components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { authOperations } from '../../redux/auth';
const LogoutButton = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
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
        <Modal
          onClick={() => dispatch(authOperations.logOut())}
          setShowModal={setShowModal}
        >
          Do you really want to leave?
        </Modal>
      ) : null}
    </div>
  );
};

export default LogoutButton;
