// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp3Seck2U-pnLqQwp5RTdLJzQ8a5f7Cv8",
  authDomain: "webmagix-89fdc.firebaseapp.com",
  projectId: "webmagix-89fdc",
  storageBucket: "webmagix-89fdc.appspot.com",
  messagingSenderId: "445393636735",
  appId: "1:445393636735:web:993a93a51323443f611e4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
