import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { isDesktop } from '../../services/mediaQuery';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import Logo from '../../components/Logo';
import UserMenu from '../../components/UserMenu';
import LogoutButton from '../../components/LogoutButton';
import s from './Header.module.css';

export const Header = ({ isAuthenticated, onLogOut }) => {
  const Desktop = isDesktop(useMediaQuery);

  return (
    <div className={Desktop ? s.desk : s.tab}>
      <div className={s.logo}>
        <Logo />
      </div>

      {isAuthenticated ? (
        <div className={s.userEmail}>
          <UserMenu />
          <LogoutButton onLogOut={onLogOut} />
        </div>
      ) : null}
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogOut: PropTypes.func.isRequired,
};

const stateProps = state => ({
  isAuthenticated: authSelectors.getIsLoggedIn(state),
});

const dispatchProps = {
  onLogOut: authOperations.logOut,
};

export default connect(stateProps, dispatchProps)(Header);
