import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../redux/auth';

export default function ProtectedRoute({ redirectPath = '/', children }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectPath} replace />;
}

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
