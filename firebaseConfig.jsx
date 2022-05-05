import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxjWGByCzZpj3z-6SSc8BWfC8y4MPp-0c",
  authDomain: "unify-c0966.firebaseapp.com",
  projectId: "unify-c0966",
  storageBucket: "unify-c0966.appspot.com",
  messagingSenderId: "1033704719808",
  appId: "1:1033704719808:web:7c998ce1e4004a5be8f425"
};

  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);