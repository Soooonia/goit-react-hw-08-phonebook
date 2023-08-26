import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./general.css";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";

export const App = () => {
  const Home = lazy(() => import('../pages/HomePage'));
  const Login = lazy(() => import('../pages/LoginPage'));
  const Registration = lazy(() => import('../pages/RegistrationPage'));
  const NotFound = lazy(() => import('./NotFound'));
  const Header = lazy(() => import('./Header'));
  const Contacts = lazy(() => import('../pages/ContactsPage'));

  return (

    <Suspense fallback={<h1 style={{marginLeft: 25, marginTop: 30, fontSize: 25}}>Loading...</h1>}>

      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="registration" element={<Registration/>}/>
          <Route path="contacts" element={
            <PrivateRoute>
              <Contacts/>
            </PrivateRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </Suspense>

  );
};
