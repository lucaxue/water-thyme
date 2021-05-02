import React from 'react';
import styled from 'styled-components';

interface Props {
  children: JSX.Element;
}

export const Footer: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#292929"
          fill-opacity="1"
          d="M0,192L80,208C160,224,320,256,480,245.3C640,235,800,181,960,160C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <Columns>{children}</Columns>
    </Wrapper>
  );
};

const Columns = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40vh;
  background: #292929;
  color: #f7f6f9;
  font-size: 1rem;
`;

const Wrapper = styled.footer`
  display: grid;
  width: 100%;
  margin-top: -16em;
`;
