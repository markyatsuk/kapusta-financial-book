// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import { authSelectors } from '../../redux/auth';
// import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
import { Desktop, Tablet, Mobile, Default } from '../../services/mediaQuery';
import s from './UserMenu.module.css';
import { authSelectors } from '../../redux/auth';

const UserMenu = () => {
  const userName = useSelector(authSelectors.getUserEmail);
  // const Desktop = isDesktop(useMediaQuery);
  // const Tablet = isTablet(useMediaQuery);
  // const Mobile = isMobile(useMediaQuery);
  return <div className={s.username}>{userName[0]}</div>;
  //   <div className={[Tablet || Mobile ? s.tab : s.desk, s.container].join(' ')}>
  //     <div>jbhfjghk</div>

  //     {Tablet || Desktop ? <p className={s.text}>{userName}</p> : null}
  //   </div>;
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
