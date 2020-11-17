import React, { useState, useEffect } from "react";
import { AvatarProfile } from "../components/AvatarProfile";
import { FormProfile } from "../components/FormProfile";
import { BackGround, Text } from "../styles/Hero";

import { navigate } from "@reach/router";

function useProgramsData(URI) {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch(`${URI}/get_programas_academicos`)
      .then(response => response.json())
      .then(data => setPrograms(data));
  }, []);
  return { programs };
}

export const ProfileRegister = ({ view = "Perfil" }) => {
  const URI = process.env.API_URL;
  const bearer = `Bearer ${JSON.parse(window.sessionStorage.token)}`;
  const { programs } = useProgramsData(URI);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    programaId: "",
    nombres: ""
  });
  const handleChange = e => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", bearer);
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(profile);
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    fetch(`${URI}/guardar_perfil`, requestOptions)
      .then(response => response.json())
      .then(data => navigate("/home", { replace: true }))
      .catch(error => console.log("error", error));
  };

  return (
    <React.Fragment>
      <BackGround>
        <AvatarProfile />
        <Text>{view}</Text>
      </BackGround>
      <FormProfile
        onSubmit={onSubmit}
        handleChange={handleChange}
        profile={profile}
        programs={programs}
      />
    </React.Fragment>
  );
};
