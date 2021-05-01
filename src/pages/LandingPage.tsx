import React from 'react';
import styled from 'styled-components';
import { SignIn } from '../components/SignIn';


export const LandingPage: React.FC = () => (
  <Wrapper>
    <div>
      <Heading>water thyme</Heading>
      <p>Have you watered your plant yet?</p>
      <SignIn />
    </div>
    <img
      src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="house plant"
    />
  </Wrapper>
);

const Heading = styled.h1`
  font-size: 8rem;
  margin-bottom: -1rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  place-items: center;
`;
