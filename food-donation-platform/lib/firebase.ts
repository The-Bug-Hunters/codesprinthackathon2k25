// src/lib/firebase.ts
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAVWdg1WCR39no2XDN70PGRl1CrR-AGlXA",
    authDomain: "anna-rakshaka.firebaseapp.com",
    projectId: "anna-rakshaka",
    storageBucket: "anna-rakshaka.firebasestorage.app",
    messagingSenderId: "97071651413",
    appId: "1:97071651413:web:16564a9382976eddfcd2dc"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // Use the default app
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
