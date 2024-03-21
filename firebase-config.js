import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'; 
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyCZgf8CY-jVL99XyexkBV3lWnh5LLC4Eys",
  authDomain: "login-acces-9490a.firebaseapp.com",
  databaseURL: "https://accessguard-459d3-default-rtdb.firebaseio.com/",
  projectId: "login-acces-9490a",
  storageBucket: "login-acces-9490a.appspot.com",
  messagingSenderId: "215488292373",
  appId: "1:215488292373:web:3e4c4a85f1708a078fd01c",
  measurementId: "G-NLT58CR0JT"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default firebase;