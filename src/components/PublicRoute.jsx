import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from 'redux/auth';

export const PublicRoute = ({ redirectPath = '/', children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? navigate(redirectPath, { replace: true }) : children;
};

PublicRoute.propTypes = {
  redirectPath: PropTypes.string,
  children: PropTypes.node,
};
