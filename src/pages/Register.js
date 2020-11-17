import React, { useState } from "react";
import { HeroBlue } from "../components/HeroBlue";
import { Forms } from "../components/Forms";
import { Button, Text, AnchorR } from "../styles/LoginStyles";

import { navigate } from "@reach/router";

import useSessionStorage from "../hooks/useSessionStorage";

export const Register = props => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useSessionStorage("token", "");
  const [error, setError] = useState([false, ""]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    rePassword: ""
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
    if (user.password != user.rePassword) {
      console.log("asd");
    } else {
      setLoading(true);
      try {
        fetch(`${URI}/signup`, {
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
              navigate("/profile-register", { replace: true });
            }
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <React.Fragment>
      <HeroBlue view={"Registro"} />
      <Forms
        method={"Registro"}
        onSubmit={onSubmit}
        handleChange={handleChange}
        user={user}
        error={error}
      >
        <Button>Registrarse</Button>
        <Text>
          Ya tienes una cuenta? <AnchorR to={"/login"}>Inicia Sesión</AnchorR>
        </Text>
      </Forms>
    </React.Fragment>
  );
};
