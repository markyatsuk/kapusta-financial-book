import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { authSelectors } from '../../redux/auth';
import { isDesktop, isTablet, isMobile } from '../../services/mediaQuery';
import s from './UserMenu.module.css';

const UserMenu = ({ isRender }) => {
  const userName = useSelector(authSelectors.getUserEmail);
  const Desktop = isDesktop(useMediaQuery);
  const Tablet = isTablet(useMediaQuery);
  const Mobile = isMobile(useMediaQuery);

  return isRender ? (
    <div className={[Tablet || Mobile ? s.tab : s.desk, s.container].join(' ')}>
      <div className={s.username}>{userName[0]}</div>
      {Tablet || Desktop ? <p className={s.text}>{userName}</p> : null}
    </div>
  ) : null;
};

UserMenu.propTypes = {
  isRender: PropTypes.bool,
  userName: PropTypes.string.isRequired,
};

UserMenu.defaultProps = {
  isRender: true,
};

const userProps = store => ({
  userName: authSelectors.getUserEmail(store),
});

export default connect(userProps)(UserMenu);
