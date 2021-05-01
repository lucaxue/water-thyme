import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useFirebaseContext } from './utils/firebaseContext';
import styled from 'styled-components';
import { DashboardPage } from './pages/DashboardPage';
import { FormPage } from './pages/FormPage';
import { LandingPage } from './pages/LandingPage';
import { SignIn } from './components/SignIn';
import { SignOut } from './components/SignOut';

export const App: React.FC = () => {
  const { auth } = useFirebaseContext();
  const [user] = useAuthState(auth);

  return (
    <Page>
      <Router>
        <Navbar>
          <h1>water thyme</h1>
          <NavLinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/form">Add New Plant</Link>
            </li>
            {user ? <SignOut /> : <SignIn />}
          </NavLinks>
        </Navbar>
        <Switch>
          <Route path="/form">{user && <FormPage />}</Route>
          <Route path="/">{user ? <DashboardPage /> : <LandingPage />}</Route>
        </Switch>
      </Router>
    </Page>
  );
};

const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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

const Page = styled.div`
  background: #f7f6f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #292929;
  margin: 0;
  padding: 0;
`;
