import firebase from 'firebase/app';
import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import Dashboard from './Components/Dashboard';
import FormPage from './Components/FormPage';
import { useFirebaseContext } from './Utils/firebaseContext';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

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
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/form">{user && <FormPage />}</Route>
            <Route path="/">
              {user ? <Dashboard /> : <button onClick={signIn}>Sign in</button>}
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
};

export default App;
