// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6w0M07CcSNWw8O-BzfDN8NQTDNArCiZ0",
  authDomain: "react-app-3464c.firebaseapp.com",
  projectId: "react-app-3464c",
  storageBucket: "react-app-3464c.appspot.com",
  messagingSenderId: "547695846081",
  appId: "1:547695846081:web:ca840f14087a2a7642aa40",
  measurementId: "G-FBG0FT0VJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;