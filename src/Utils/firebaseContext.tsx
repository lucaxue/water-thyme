import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createContext, useContext, FC } from 'react';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const auth = firebase.auth();
const firestore = firebase.firestore();

const FirebaseContext = createContext<any>(null);

interface props {
  children: JSX.Element;
}

export const FirebaseContextProvider: FC<props> = ({ children }) => {
  return (
    <FirebaseContext.Provider
      value={{
        auth,
        firestore,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(FirebaseContext);
