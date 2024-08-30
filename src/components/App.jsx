import { Navigation } from './Navigation/Navigation';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

const Contacts = lazy(() => import('./Contacts/Contacts'));
const UserSignup = lazy(() => import('./UserSignup/UserSignup'));
const UserLogin = lazy(() => import('./UserLogin/UserLogin'));

export const App = () => {
  return (
    <>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Navigation />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute>
                    <Contacts />
                  </PrivateRoute>
                }
              />
              <Route path="/register" element={<UserSignup />} />
              <Route path="/login" element={<UserLogin />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
};