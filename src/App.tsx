import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';
import { DashboardPage } from './pages/DashboardPage';
import { FormPage } from './pages/FormPage';
import { LandingPage } from './pages/LandingPage';
import { useFirebaseContext } from './utils/firebaseContext';

export const App: React.FC = () => {
  const { auth } = useFirebaseContext();
  const [user] = useAuthState(auth);

  return (
    <Page>
      <Router>
        <Navbar>
          <Anchor href="/">
            <h1>water thyme</h1>
          </Anchor>
          <NavLinks>
            <li>
              <Anchor href="/" underline>
                Home
              </Anchor>
            </li>
            <li>
              <Anchor href="/form" underline>
                Add New Plant
              </Anchor>
            </li>
            {user ? <SignOut /> : <SignIn />}
          </NavLinks>
        </Navbar>
        <Switch>
          <Route path="/form">{user && <FormPage />}</Route>
          <Route path="/">{user ? <DashboardPage /> : <LandingPage />}</Route>
        </Switch>
        <Footer>
          <div>
            <h1>water thyme</h1>
            <p>Making sure your plants are happy...</p>
          </div>
        </Footer>
      </Router>
    </Page>
  );
};

const Navbar = styled.ul`
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background: rgba(255, 255, 255, 0.726);
  align-items: center;
  box-shadow: 0 1px 5px #a7a7a7;
  list-style: none;
  position: fixed;
  top: 0;
  margin: 0;
  font-size: 1rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 30%;
  justify-content: space-evenly;
`;

const Anchor = styled.a<{ underline?: boolean }>`
  text-decoration: none;
  color: #292929;
  position: relative;
  font-weight: bold;
  letter-spacing: 0.1rem;
  ${(props) =>
    props.underline &&
    css`
      &:before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        top: 1.5rem;
        background: #292929;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
      }
      &:hover:before {
        visibility: visible;
        width: 100%;
      }
    `}
`;

const Page = styled.div`
  background: #f7f6f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #292929;
  margin: 5rem 0 0 0;
  padding: 0;
  width: 100%;
`;

const Footer = styled.footer`
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
