import styled from "styled-components";
import { Link } from "@reach/router";
export const Anchor = styled(Link)`
  display: block;
  text-align: right;
  text-decoration: none;
  color: #7d7d7d;
`;

export const Button = styled.button`
  background: #0697f2;
  border: 0px;
  outline: 0px;
  border-radius: 20px;
  width: 100%;
  padding: 12px;
  box-shadow: 6px 6px 12px -2px rgba(183, 183, 183, 1);
  color: #fff;
  font-size: 16px;
  margin-top: 20px;
`;

export const Text = styled.p`
  margin-top: 20px;
  text-align: center;
  color: #b7b7b7;
`;

export const AnchorR = styled(Link)`
  color: #0697f2;
  text-decoration: none;
`;
