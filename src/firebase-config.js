/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyC1q-sYKfJD6WY5Ml6oo-OyHrGWLSwB8K8",
  authDomain: "chatbot-tol.firebaseapp.com",
  databaseURL: "https://chatbot-tol-default-rtdb.firebaseio.com",
  projectId: "chatbot-tol",
  storageBucket: "chatbot-tol.appspot.com",
  messagingSenderId: "815798195255",
  appId: "1:815798195255:web:024033b07c7873a8dadbb2",
  measurementId: "G-NV3WXYMPGN"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}