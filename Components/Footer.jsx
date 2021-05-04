import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Main>
      <p>Pasindu Prabhashitha</p>
    </Main>
  );
}

const Main = styled.div`
  max-width: 100vw;
  height: 5vh;
  background: #1b1b1b;
  color: white;
  text-align: center;
`;

export default Footer;
