// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
import s from './UserMenu.module.css';
import { authSelectors } from '../../redux/auth';

const UserMenu = () => {
  const email = useSelector(authSelectors.getUserEmail);
  const array = email.split('@');
  const userName = array[0];

  return (
    <div>
      <div className={s.username}>{userName[0]}</div>
      <p className={s.text}>{userName}</p>
    </div>
  );
};

// UserMenu.propTypes = {
//   isRender: PropTypes.bool,
//   userName: PropTypes.string.isRequired,
// };

// UserMenu.defaultProps = {
//   isRender: true,
// };

// const userProps = store => ({
//   userName: authSelectors.getUserEmail(store),
// });

export default UserMenu;
