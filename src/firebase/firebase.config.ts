import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHH4OFteJJz64L_u0Af5bHVyBbiQJo30I",
  authDomain: "view-videos-1e914.firebaseapp.com",
  projectId: "view-videos-1e914",
  storageBucket: "view-videos-1e914.appspot.com",
  messagingSenderId: "347874655027",
  appId: "1:347874655027:web:ed94ca911e4c025ddb1c46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
