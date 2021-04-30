import firebase from 'firebase';
import React, { FC } from 'react';
import { useFirebaseContext } from '../Utils/firebaseContext';
import Button from './Button';

export const SignIn: FC = () => {
  const { auth } = useFirebaseContext();
  function signIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return <Button onClick={signIn}>Sign In</Button>;
};
