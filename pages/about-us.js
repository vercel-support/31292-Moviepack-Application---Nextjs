import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Layout from "../Components/Layout";

const AboutPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <Layout title="About Moviepack | Moviepack - Know about Movies!">
      <PageContainer>
        <Headline> About Moviepack </Headline>
        <p>
          Welcome to Moviepack, your number one source for all movie details.
          We're dedicated to providing you the best movies. We're working to
          turn our movie webiste to movie download store. We hope you enjoy our
          website as much as we enjoy offering them to you. <br /> <br />
          Sincerely, Moviepack Team.
        </p>
        <GoBack onClick={handleClick}> Home </GoBack>
      </PageContainer>
    </Layout>
  );
};

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #1b1b1b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  text-align: center;
`;

const Headline = styled.h1`
  margin-bottom: 15px;
`;

const GoBack = styled.button`
  height: 2rem;
  margin-top: 1rem;
  width: 100px;
  outline: none;
  border: none;
  background-color: #ffc400;
  border-radius: 5px;
  cursor: pointer;
`;

export default AboutPage;
