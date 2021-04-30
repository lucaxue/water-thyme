import firebase from 'firebase/app';
import React, { FC } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import './App.css';
import Dashboard from './Components/Dashboard';
import { useFirebaseContext } from './Utils/firebaseContext';

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
        {user ? <Dashboard /> : <button onClick={signIn}>Sign in</button>}
      </header>
    </div>
  );
};

export default App;
