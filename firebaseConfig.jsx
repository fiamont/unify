import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHft74OgicAIWu0wNeHmqIbIyg7eonSmE",
    authDomain: "unify-sti.firebaseapp.com",
    projectId: "unify-sti",
    storageBucket: "unify-sti.appspot.com",
    messagingSenderId: "298156158681",
    appId: "1:298156158681:web:6630ab50bc28100eb718c8"
};

  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);