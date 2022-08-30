import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from 'redux/auth';
import { SharedLayout } from './SharedLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { Header } from './Header/Header';
const AuthView = lazy(() =>
  import('../pages/AuthView/AuthView' /* webpackChunkName: "auth" */),
);
const HomeView = lazy(() =>
  import('../pages/HomeView/HomeView' /* webpackChunkName: "home" */),
);
// const ReportsView = lazy(() =>
//   import('../pages/ReportsView/ReportsView' /* webpackChunkName: "reports" */),
// );
const BalanceView = lazy(() =>
  import('../pages/BalanceView/BalanceView' /* webpackChunkName: "balance" */),
);
export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div>
        {isFetchingCurrentUser ? (
          <p>Download...</p>
        ) : (
          <>
            <Suspense fallback={<p>Download...</p>}>
              <Routes>
                <Route path="/auth" element={<AuthView />}></Route>
                <Route path="/" element={<SharedLayout />}>
                  <Route
                    path="auth"
                    element={
                      <PublicRoute redirectPath={'/home'}>
                        <AuthView />
                      </PublicRoute>
                    }
                  />
                  <Route
                    path="home"
                    element={
                      <ProtectedRoute redirectPath={'/auth'}>
                        <HomeView />
                      </ProtectedRoute>
                    }
                  />

                  {/* <Route
                    path="reports"
                    element={
                      // <ProtectedRoute redirectPath={'/auth'}>
                      <ReportsView />
                      // </ProtectedRoute>
                    }
                  /> */}
                </Route>
                <Route
                  path="balance"
                  element={
                    // <ProtectedRoute redirectPath={'/auth'}>
                    <BalanceView />
                    // </ProtectedRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/auth" />} />
              </Routes>
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};
