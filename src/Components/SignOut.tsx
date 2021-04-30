import React, { FC } from 'react';
import { useFirebaseContext } from '../Utils/firebaseContext';
import Button from './Button';

export const SignOut: FC = () => {
  const { auth } = useFirebaseContext();
  return (
    auth.currentUser && (
      <Button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    )
  );
};
