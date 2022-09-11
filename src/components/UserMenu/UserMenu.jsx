// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
// import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
import s from './UserMenu.module.css';
import { authSelectors } from '../../redux/auth';

const UserMenu = () => {
  //   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getUserEmail);

  return (
    email && (
      <div>
        <div className={s.username}>{email.split('@')[0][0]}</div>
        <p className={s.text}>{email.split('@')[0]}</p>
      </div>
    )
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
