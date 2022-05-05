import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5B8pRxJ_rN3q9BF8NEnIEjKWjX5K2fUQ",
  authDomain: "test-42e55.firebaseapp.com",
  projectId: "test-42e55",
  storageBucket: "test-42e55.appspot.com",
  messagingSenderId: "1069034673710",
  appId: "1:1069034673710:web:7aac1d6d71dc349bcd31bf"
};

  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);