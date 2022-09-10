import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { isMobile } from '../../services/mediaQuery';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import AuthView from '../../pages/AuthView/AuthView';
import BalanceView from 'pages/BalanceView';
import ReportsView from '../../pages/ReportsView/ReportsView';
import s from './Logo.module.css';

const Logo = () => {
  const Mobile = isMobile(useMediaQuery);
  const isAuth = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Link
      to={isAuth ? <AuthView /> : Mobile ? <BalanceView /> : <ReportsView />}
    >
      <div className={s.logo}></div>
    </Link>
  );
};

export default Logo;
