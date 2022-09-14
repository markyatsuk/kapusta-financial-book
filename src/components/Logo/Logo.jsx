import { Link } from 'react-router-dom';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/balance">
      <div className={s.logo}></div>
    </Link>
  );
};

export default Logo;
