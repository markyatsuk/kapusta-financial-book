// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
// import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(state => state.auth.googleEmail);

  const array = email.split('@');
  const userName = array[0];

  return (
    <div className={s.userMenu}>
      <div className={s.username}>{userName[0]}</div>
      <p className={s.text}>{userName}</p>
    </div>
  );
};

export default UserMenu;
