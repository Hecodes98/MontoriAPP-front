import styled from "styled-components";
import { MdEdit } from "react-icons/md";

export const EditIcon = styled(MdEdit)`
  position: absolute;
  bottom: -5px;
  background: rgb(9, 143, 236);
  border-radius: 50%;
  margin-left: 100px;
  color: #fff;
  padding:4px;
`
export const BackGround = styled.div`
  background: rgb(41, 85, 217);
  background: linear-gradient(
    180deg,
    rgba(41, 85, 217, 1) 15%,
    rgba(5, 151, 242, 1) 100%
  );
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items:center;
`;

export const Text = styled.p`
  color: #fff;
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  right: 10px;
`;
