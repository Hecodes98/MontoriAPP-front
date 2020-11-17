import React, { useState, useEffect } from "react";
import { HeroBlue } from "../components/HeroBlue";
import { Forms } from "../components/Forms";
import { Anchor, Button, Text, AnchorR } from "../styles/LoginStyles";
import { useStateValue } from "../Context";

import { navigate } from "@reach/router";

import useSessionStorage from "../hooks/useSessionStorage";

export const Login = props => {
  const [{ isAuth }, dispatch] = useStateValue();
  const [session, setSession] = useSessionStorage("token", "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([false, ""]);
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const URI = process.env.API_URL;

  const handleChange = e => {
    if (error[0] == true) error[0] = false;
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    fetch(`${URI}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setError([true, data.mensaje]);
        } else {
          const { token } = data;
          setSession(token);
          if (data.profile) {
            navigate("/profile-register");
          } else {
            dispatch({
              type: "LOGIN"
            });
            navigate("/home", { replace: true });
          }
        }
      });
  };

  return (
    <React.Fragment>
      <HeroBlue />
      <Forms
        onSubmit={onSubmit}
        handleChange={handleChange}
        user={user}
        error={error}
      >
        <Anchor to={"#"}>¿Olvidó su contraseña?</Anchor>
        <Button>Iniciar sesión</Button>
        <Text>
          No tienes una cuenta <AnchorR to={"/register"}>Registrate</AnchorR>
        </Text>
      </Forms>
    </React.Fragment>
  );
};
