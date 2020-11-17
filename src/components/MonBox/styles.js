import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  border-radius: 9px;
  width: 86%;
  margin: 14px auto;
  padding: 6px 0;

  ${({ flexV }) =>
    !flexV &&
    `display:flex;
    justify-content:space-between;
  `}
`;

export const PhotoCard = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  left: -19px;
  color: rgb(125, 125, 125);
  box-shadow: rgb(68 68 68) 4px 3px 12px -3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoMon = styled.div`
  margin-left: 54px;
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #fff;
`;
export const TextM = styled(Text)`
  font-weight: 300;
  font-size: 12px;
`;

export const IconWrapper = styled.div`
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 88%;
  border-radius: 50%;
`;
