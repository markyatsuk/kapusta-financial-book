import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from '../redux/auth';

import { useSearchParams } from 'react-router-dom';

// import { ProtectedRoute } from './ProtectedRoute';
// import { PublicRoute } from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { Header } from './Header/Header';
const AuthView = lazy(() =>
  import('../pages/AuthView/AuthView' /* webpackChunkName: "auth" */),
);
const ReportsView = lazy(() =>
  import('../pages/ReportsView/ReportsView' /* webpackChunkName: "reports" */),
);
const BalanceView = lazy(() =>
  import('../pages/BalanceView/BalanceView' /* webpackChunkName: "balance" */),
);
export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  const [searchParams] = useSearchParams();
  // const { token } = queryString.parse(location.search);

  const token = searchParams.get('token');

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(authOperations.googleApi({ token }));
    }
  }, [token, dispatch]);

  return (
    <>
      <div>
        {isFetchingCurrentUser ? (
          <p>Download...</p>
        ) : (
          <>
            <Header />
            <Suspense fallback={<p>Download...</p>}>
              <Routes>
                <Route path="/" element={<Navigate to="auth/login" />}></Route>
                {/* <Route path="/auth/register" element={<AuthView />}></Route> */}
                {/* <Route element={<ProtectedRoute redirectTo="auth/login" />}>
                  <Route path="/balance" element={<BalanceView />}></Route>
                </Route> */}
                <Route element={<ProtectedRoute redirectTo="auth/login" />}>
                  <Route path="/balance" element={<BalanceView />}></Route>
                </Route>
                <Route element={<ProtectedRoute redirectTo="auth/register" />}>
                  <Route path="/balance" element={<BalanceView />}></Route>
                </Route>
                <Route element={<ProtectedRoute redirectTo="auth/login" />}>
                  <Route path="/reports" element={<ReportsView />}></Route>
                </Route>
                <Route element={<ProtectedRoute redirectTo="auth/register" />}>
                  <Route path="/reports" element={<BalanceView />}></Route>
                </Route>
                <Route
                  element={<PublicRoute restricted redirectTo="balance" />}
                >
                  <Route path="/auth/login" element={<AuthView />}></Route>
                </Route>
                <Route
                  element={<PublicRoute restricted redirectTo="balance" />}
                >
                  <Route path="/auth/register" element={<AuthView />}></Route>
                </Route>
                <Route
                  element={<PublicRoute restricted redirectTo="reports" />}
                >
                  <Route path="/auth/register" element={<AuthView />}></Route>
                </Route>

                <Route
                  element={<PublicRoute restricted redirectTo="reports" />}
                >
                  <Route path="/auth/login" element={<AuthView />}></Route>
                </Route>

                {/* <Route path="*" element={<Navigate to="/auth/login" />} /> */}
              </Routes>
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};
