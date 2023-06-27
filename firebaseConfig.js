import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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