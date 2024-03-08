import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPP8nlUcIW3wXe0udcz7OKEysSu4cQw9E",
  authDomain: "clone-c9114.firebaseapp.com",
  projectId: "clone-c9114",
  storageBucket: "clone-c9114.appspot.com",
  messagingSenderId: "587229952596",
  appId: "1:587229952596:web:38e03027ea441459b58bc1",
  measurementId: "G-6CJ3PPRYD8"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};