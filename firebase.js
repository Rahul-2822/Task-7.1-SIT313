import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyDYn78-SO7nzVtOfcIAPDn-WfC7Qq3wUAs",
  authDomain: "rahul-6e8c5.firebaseapp.com",
  projectId: "rahul-6e8c5",
  storageBucket: "rahul-6e8c5.appspot.com",
  messagingSenderId: "77536140017",
  appId: "1:77536140017:web:c47f5915023b01f9b3e750",
  measurementId: "G-EC116GLGSB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
