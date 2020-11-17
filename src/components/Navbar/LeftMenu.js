import React, { useState } from "react";

import {
  NavButton,
  SideNav,
  CloseBtn,
  Overlay,
  UserInfo,
  WrapperPhoto,
  Photo,
  Name,
  Email,
  Career
} from "./styles";
import Avatar from "../../images/Avatar.jpeg";

export const LeftMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  console.log(user);
  return (
    <React.Fragment>
      {/* <Overlay open={open}> */}
      <Overlay onClick={() => setOpen(!open)} open={open} />
      <SideNav open={open}>
        <CloseBtn size={32} href="#" onClick={() => setOpen(!open)}></CloseBtn>
        <UserInfo>
          <WrapperPhoto>
            <Photo src={user.gravatar} alt="User Photo" />
          </WrapperPhoto>

          <Name>{user.nombres || "Loading..."}</Name>
          <Email>{user.email || "Loading..."}</Email>
          <Career>{user.programa || "Loading..."}</Career>
        </UserInfo>
        <a href="">About</a>
        <a href="">Test</a>
        <a href="">Editar Perfil</a>
      </SideNav>
      {/* </Overlay> */}
      <NavButton onClick={() => setOpen(!open)} />
    </React.Fragment>
  );
};
