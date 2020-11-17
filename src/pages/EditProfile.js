import React from "react";
import { AvatarProfile } from "../components/AvatarProfile";

import { BackGround, Text } from "../styles/Hero";

export const EditProfile = ({ view = "Profile" }) => {
  return (
    <React.Fragment>
      <BackGround>
        <AvatarProfile />
        <Text>{view}</Text>
      </BackGround>
    </React.Fragment>
  );
};
