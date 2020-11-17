import styled from "styled-components";
import { MdMenu } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdClose } from "react-icons/md";

export const Nav = styled.div`
  background: linear-gradient(
    180deg,
    rgba(41, 85, 217, 1) 15%,
    rgba(5, 151, 242, 1) 100%
  );
  height: 10vh;
  display: flex;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  background: rgb(158 139 139 / 0.5);
  left: 0;
  bottom: 0;
  right: 0;
  display: none;
  transition: 0.5s;
  ${({ open }) =>
    open &&
    `
      display:block;
    `}
`;

export const CloseBtn = styled(MdClose)`
  position: absolute;
  top: 15;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
`;

export const SideNav = styled.div`
  z-index: 2;
  height: 100vh;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  background: #fff;
  a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 16px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }
  ${({ open }) =>
    open &&
    `
      width:320px;
    `}
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WrapperPhoto = styled.div`
  width: 120px;
  height: 120px;
  background: #0795f1;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 50%;
`;

export const Photo = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
`;

export const WrapperNav = styled.div`
  width: 90%;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const NavButton = styled(MdMenu)`
  color: #fff;
  font-size: 28px;
`;

export const Name = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 500;
  color: #525252;
  margin-top: 10px;
`;

export const Email = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  color: #525252;
  margin-top: 4px;
`;

export const Career = styled.p`
  font-size: 12px;
  color: #c0c0c0;
  font-size: 12px;
  margin-top: 4px;
`;

export const FormStyle = styled.div`
  svg {
    position: absolute;
  }
  width: 93%;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: right;
`;
export const Input = styled.input`
  width: 92%;
  padding: 6px 10px 6px 48px;
  border-radius: 20px;
  border: none;
  color: rgb(125, 125, 125);
  box-shadow: rgb(39 37 37) 4px 3px 12px -3px;
`;
export const IconSearch = styled(MdSearch)`
  margin: 2px 2px 2px 13px;
  color: rgb(183, 183, 183);
`;
