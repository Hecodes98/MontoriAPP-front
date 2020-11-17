import React, { useState } from "react";
import {
  Box,
  PhotoCard,
  InfoMon,
  Text,
  TextM,
  IconWrapper,
  Image
} from "./styles";
import Avatar from "../../images/Avatar.jpeg";
export const MonBox = ({ nextMon = false, children }) => {
  const colors = ["#00be52", "#0697f2", "#f24c3c", "#f25c05"];
  const [color, setColor] = useState(colors[Math.floor(Math.random() * 4)]);

  return (
    <Box flexV={nextMon} style={{ background: color }}>
      <PhotoCard style={{ background: color }}>
        <Image src={Avatar} alt="Profile Monitor Picture" />
      </PhotoCard>
      <InfoMon>
        <Text>Materia</Text>
        <TextM>Name</TextM>
      </InfoMon>
      {!nextMon && <IconWrapper>{children}</IconWrapper>}
      {nextMon && <div>{children}</div>}
    </Box>
  );
};
