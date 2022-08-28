import { Link } from 'react-router-dom';
import s from './FollowLink.module.css';

const FollowLink = ({ path, children }) => (
  <Link to={path} className={s.link}>
    {children}
  </Link>
);

export default FollowLink;
