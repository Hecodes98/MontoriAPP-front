import React from "react";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ProfileRegister } from "./pages/ProfileRegister";
import { Home } from "./pages/Home";
import { NotLoggedUser } from "./pages/NotLoggedUser";
import { EditProfile } from "./pages/EditProfile";
import { GlobalStyle } from "./GlobalStyles";

import { Navbar } from './components/Navbar'

import { Router, Redirect } from "@reach/router";

import { useStateValue } from "./Context";

export const App = () => {
  const [{ isAuth }, dispatch] = useStateValue();
  console.log(isAuth);
  return (
    <React.Fragment>
      <GlobalStyle />
      {isAuth ? (
        <Navbar>
        <Router>
          
            <Home path="/home" />
            <EditProfile path="edit-profile" />
          <Redirect from="/login" to="/home" />
          <Redirect from="/register" to="/home" />
        </Router>
        </Navbar>
      ) : (
        <Router>
          <Login path="/login" />
          <Register path="/register" />
          <NotLoggedUser path="/notlogged" />
          <ProfileRegister path="/profile-register" />
          <Redirect from="/home" to="/login" />
        </Router>
      )}
    </React.Fragment>
  );
};
