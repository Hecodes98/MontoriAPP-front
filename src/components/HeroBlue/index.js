import React from "react";
import { LogoHero, LogoImg } from "./styles";
import { BackGround, Text } from "../../styles/Hero";
import Logo from "../../images/Icono.svg";

export const HeroBlue = ({ view = "Iniciar Sesion" }) => (
  <BackGround>
    <LogoHero>
      <LogoImg src={Logo} alt="Logo App" />
    </LogoHero>
    <Text>{view}</Text>
  </BackGround>
);
