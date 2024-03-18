import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE,
  authDomain: "view-videos-1e914.firebaseapp.com",
  projectId: "view-videos-1e914",
  storageBucket: "view-videos-1e914.appspot.com",
  messagingSenderId: import.meta.env.VITE_MESSAGE_FIREBASE,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
