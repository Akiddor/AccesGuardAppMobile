import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';

export const firebaseConfig = {
   apiKey: "AIzaSyCVCvedTinyUadvsyHbEoI7hMwypNnGpT4",
  authDomain: "accessguard-459d3.firebaseapp.com",
  databaseURL: "https://accessguard-459d3-default-rtdb.firebaseio.com",
  projectId: "accessguard-459d3",
  storageBucket: "accessguard-459d3.appspot.com",
  messagingSenderId: "147602161004",
  appId: "1:147602161004:web:7d81b2574dd85bf3ed4749",
  measurementId: "G-PJPJ8GCM1W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export { app, analytics, db, ref, set };