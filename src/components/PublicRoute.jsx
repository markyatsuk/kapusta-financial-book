import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({ redirectPath = '/', children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
}

PublicRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
