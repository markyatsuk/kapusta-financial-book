// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
// import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
import s from './UserMenu.module.css';
import authSelectors from '../../redux/auth/auth-selectors';

const UserMenu = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getUserEmail);
  const googleEmail = useSelector(authSelectors.getUserGoogleEmail);

  return email ? (
    <div className={s.userMenu}>
      <div className={s.username}>{email.split('@')[0][0]}</div>
      <p className={s.text}>{email.split('@')[0]}</p>
    </div>
  ) : googleEmail ? (
    <div className={s.userMenu}>
      <div className={s.username}>{googleEmail.split('@')[0][0]}</div>
      <p className={s.text}>{googleEmail.split('@')[0]}</p>
    </div>
  ) : null;
};

export default UserMenu;
