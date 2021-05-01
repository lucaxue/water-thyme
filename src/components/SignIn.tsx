import React from 'react';
import firebase from 'firebase';
import { useFirebaseContext } from '../utils/firebaseContext';
import { Button } from './Button';

export const SignIn: React.FC = () => {
  const { auth } = useFirebaseContext();
  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <Button onClick={signIn}>Sign In</Button>;
};
