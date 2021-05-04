import React from "react";
import styled from "styled-components";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Main>
      <p>Moviepack | {year}</p>
      <p>All rights reserved.</p>
    </Main>
  );
}

const Main = styled.div`
  max-width: 100vw;
  height: 8vh;
  background: #1b1b1b;
  color: white;
  text-align: center;
`;

export default Footer;
