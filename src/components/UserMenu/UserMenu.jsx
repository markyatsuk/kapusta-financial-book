// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
// import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
import s from './UserMenu.module.css';
import { authSelectors } from '../../redux/auth';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
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
