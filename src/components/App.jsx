import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';

const Auth = lazy(() =>
  import('../pages/AuthView' /* webpackChunkName: "auth" */),
);
const Home = lazy(() =>
  import('../pages/HomeView' /* webpackChunkName: "home" */),
);
const Reports = lazy(() =>
  import('../pages/ReportsView' /* webpackChunkName: "reports" */),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isFetchingCurrentUser ? (
        <p>Download...</p>
      ) : (
        <>
          <Suspense fallback={<p>Download...</p>}>
            <Routes>
              <Route
                path="/auth"
                element={
                  <PublicRoute redirectPath={'/home'}>
                    <Auth />
                  </PublicRoute>
                }
              />
              <Route
                path="/home"
                element={
                  <ProtectedRoute redirectPath={'/auth'}>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <ProtectedRoute redirectPath={'/auth'}>
                    <Reports />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/auth" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </div>
  );
};
