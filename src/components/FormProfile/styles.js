import styled from "styled-components";
import { MdFace } from "react-icons/md";
import { Link } from "@reach/router";

export const FormStyle = styled.div`
  svg {
    position: absolute;
  }
  width: 100%;
  margin-bottom: 25px;
  margin-top: 25px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 56px;
  border-radius: 20px;
  border: none;
  color: #7d7d7d;
  box-shadow: 4px 3px 12px -3px rgba(183, 183, 183, 1);
`;

export const Select = styled.select`
  background: #fff;
  width: 100%;
  padding: 15px 15px 15px 56px;
  border-radius: 20px;
  border: none;
  color: #7d7d7d;
  box-shadow: 4px 3px 12px -3px rgba(183, 183, 183, 1);
`;
export const IconName = styled(MdFace)`
  margin: 7px 2px 7px 16px;
  color: #b7b7b7;
`;

export const TextR = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #b7b7b7;
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color: #0697f2;
`;
