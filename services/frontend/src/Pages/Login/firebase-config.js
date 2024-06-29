import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBnFroMvaYBE3cMWLiwJlBN6NqrIyRSAX4",
  authDomain: "prevac-5ac96.firebaseapp.com",
  databaseURL: "https://prevac-5ac96-default-rtdb.firebaseio.com",
  projectId: "prevac-5ac96",
  storageBucket: "prevac-5ac96.appspot.com",
  messagingSenderId: "424489147457",
  appId: "1:424489147457:web:83b38e3a0cc0756dd97ac0",
  measurementId: "G-7RH928HC6T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
