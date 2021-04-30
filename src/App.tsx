import React from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import LoginPage from "./Components/LoginPage";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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

function App() {
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
}

export default App;

function Dashboard() {
  const plantsRef = firestore.collection("plants");

  const query = plantsRef.where("uid", "==", auth?.currentUser?.uid);

  const [plants] = useCollectionData(query, { idField: "id" });
  console.log(plants);

  return <div>hi you are logged in</div>;
}
