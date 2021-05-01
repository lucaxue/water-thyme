import React from 'react';
import { useFirebaseContext } from '../utils/firebaseContext';
import { Button } from './Button';

export const SignOut: React.FC = () => {
  const { auth } = useFirebaseContext();
  return (
    auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    )
  );
};
