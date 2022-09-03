import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authOperations, authSelectors } from '../redux/auth';
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

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
                <Route path="/auth/register" element={<AuthView />}></Route>
                <Route path="/auth/login" element={<AuthView />}></Route>
                <Route element={<ProtectedRoute redirectTo="/auth/login" />}>
                  <Route path="/users/balance" element={<BalanceView />}></Route>
                </Route>
                <Route element={<ProtectedRoute redirectTo="/auth/register" />}>
                  <Route path="/users/balance" element={<BalanceView />}></Route>
                </Route>
                <Route element={<PublicRoute restricted redirectTo="/users/balance" />}>
                  <Route path="/auth/login" element={<AuthView />}></Route>
                </Route>
                <Route element={<PublicRoute restricted redirectTo="/reports" />}>
                  <Route path="/auth/login" element={<AuthView />}></Route>
                </Route>
                <Route element={<ProtectedRoute redirectTo="/auth/login" />}>
                  <Route path="/reports" element={<ReportsView />}></Route>
                </Route>
                <Route element={<ProtectedRoute redirectTo="/auth/register" />}>
                  <Route path="/reports" element={<ReportsView/>}></Route>
                </Route>
                {/* <Route
                  path="/auth/login"
                  element={
                    <PublicRoute redirectPath={'/home'}>
                      <AuthView />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/home"
                  element={
                    <ProtectedRoute redirectPath={'/auth/login'}>
                      <HomeView />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/reports"
                  element={
                    // <ProtectedRoute redirectPath={'/auth'}>
                    <ReportsView />
                    // </ProtectedRoute>
                  }
                /> */}

  
                <Route path="*" element={<Navigate to="/auth/login" />} />
              </Routes>
            </Suspense>
          </>
        )}
      </div>
    </>
  );
};
