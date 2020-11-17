import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { MdVpnKey } from "react-icons/md";

export const FormStyle = styled.div`
  svg {
    position: absolute;
  }
  width: 100%;
  margin-bottom: 15px;
  margin-top: 15px;
  text-align: center;
`;

export const FormWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const IconEmail = styled(MdEmail)`
  margin: 7px 2px 7px 16px;
  color: #b7b7b7;
`;

export const IconPass = styled(MdVpnKey)`
  margin: 7px 2px 7px 16px;
  color: #b7b7b7;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 56px;
  border-radius: 20px;
  border: none;
  color: #7d7d7d;
  box-shadow: 4px 3px 12px -3px rgba(183, 183, 183, 1);
`;
