import React from "react";
import { Navbar } from "../components/Navbar";
import { MonBox } from "../components/MonBox";
import { NextMon } from "../components/NextMon";
import { Container, Text } from "../styles/Home";

import { ImQrcode } from "react-icons/im";

export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Text>Monitoria en curso</Text>
        <MonBox>
          <ImQrcode
            size={48}
            style={{ color: "#fff" }}
            onClick={() => console.log("a mimir")}
          />
        </MonBox>

        <Text>Proximas monitorias</Text>
        <MonBox nextMon={true}>
          <NextMon />
        </MonBox>
        <MonBox nextMon={true}>
          <NextMon />
        </MonBox>
        <MonBox nextMon={true}>
          <NextMon />
        </MonBox>
      </Container>
    </React.Fragment>
  );
};

/*  DIV 

    display: flex;
    justify-content: space-between;
    margin-left: 54px;
    margin-right: 10px;
    padding-top: 10px;

    p
    font-size: 10px;
    color: #fff;
    font-family: 'Roboto';
    font-weight: 500;
*/
