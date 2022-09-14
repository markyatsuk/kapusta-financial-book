import { useMediaQuery } from 'react-responsive';
import { isDesktop } from '../../services/mediaQuery';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
import UserMenu from '../UserMenu/UserMenu';
import LogoutButton from '../LogoutButton';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

export const Header = () => {
  const Desktop = isDesktop(useMediaQuery);
  const isLoggegIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>

      {isLoggegIn ? (
        <div className={s.userEmail}>
          <UserMenu />
          <LogoutButton />
        </div>
      ) : null}
    </div>
  );
};

const stateProps = state => ({
  isLoggegIn: authSelectors.getIsLoggedIn(state),
});

const dispatchProps = {
  onLogOut: authOperations.logOut,
};

export default connect(stateProps, dispatchProps)(Header);
