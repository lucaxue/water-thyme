import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseContextProvider } from './utils/firebaseContext';
import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContextProvider>
      <App />
    </FirebaseContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
