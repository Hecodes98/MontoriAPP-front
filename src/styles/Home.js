import styled from "styled-components";

const WIDTH = "90%";

export const Container = styled.div`
  height: 90vh;
  margin: 0 auto;
  overflow: scroll;
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  width: ${WIDTH};
  margin: 0 auto;
  padding: 20px 0 5px 0;
  border-bottom: 1px solid #dedede;
  margin-bottom: 15px;
`;
