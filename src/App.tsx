import firebase from 'firebase/app';
import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Dashboard from './Components/Dashboard';
import FormPage from './Components/FormPage';
import { useFirebaseContext } from './Utils/firebaseContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';

const App: FC = () => {
  const { auth } = useFirebaseContext();
  //signed in - user is an object
  //signed out - user is null
  const [user] = useAuthState(auth);
  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <Page>
      <Router>
        <Navbar>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Add New Plant</Link>
          </li>
        </Navbar>
        <Switch>
          <Route path="/form">{user && <FormPage />}</Route>
          <Route path="/">
            {user ? <Dashboard /> : <button onClick={signIn}>Sign in</button>}
          </Route>
        </Switch>
      </Router>
    </Page>
  );
};

export default App;

const Navbar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: rgba(255, 255, 255, 0.52);
  align-items: center;
  list-style: none;
  position: fixed;
  top: 0;
  margin: 0;
`;

const Page = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 0;
  padding: 0;
`;
