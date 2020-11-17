import styled from "styled-components";
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
`;

export const Text = styled.p`
  color: #fff;
  position: absolute;
  bottom: 10px;
  font-size: 20px;
  right: 10px;
`;
