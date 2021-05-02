import React from "react";
import styled from "styled-components";
import { SignIn } from "../components/SignIn";

export const LandingPage: React.FC = () => (
  <Wrapper>
    <div>
      <Heading>water thyme</Heading>
      <p>Have you watered your plant yet?</p>
      <SignIn />
    </div>
    <Img
      src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="house plant"
    />
  </Wrapper>
);

const Heading = styled.h1`
  font-size: 8rem;
  margin-bottom: -1rem;
  letter-spacing: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 100vh;
`;
