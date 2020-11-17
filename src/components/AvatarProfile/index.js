import React from "react";
import { AvatarWrapper, Image } from "./styles";
import Avatar from "../../images/Avatar.jpeg";

export const AvatarProfile = () => {
  return (
    <AvatarWrapper>
      <Image src={Avatar} alt="" />
    </AvatarWrapper>
  );
};
