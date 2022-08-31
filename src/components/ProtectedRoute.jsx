import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { authSelectors } from '../redux/auth';


export const ProtectedRoute = ({ redirectPath = '/', children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : navigate(redirectPath, { replace: true });
};

ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
