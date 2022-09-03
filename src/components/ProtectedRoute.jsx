import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../redux/auth';


export default function ProtectedRoute ({ redirectTo }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

ProtectedRoute.propTypes = {
  redirectTo: PropTypes.string,
};
