import s from './Notification.module.css';

const Notification = ({ onClose }) => {
  const handleClickWindow = e => {
    // if (e.currentTarget === e.target) {
    onClose();
    // }
  };

  return (
    <div className={s.commentBubble}>
      Hello! To get started, enter your current account balance!
      <p className={s.bubbleText}>You can't spend money until you have it :)</p>
      <h6 className={s.prompt} onClick={handleClickWindow}>
        Click here to close
      </h6>
    </div>
  );
};

export default Notification;
