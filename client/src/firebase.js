
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD1fd8UDolCamjxj8KDIYF62JveAzN7Z_Y",
    authDomain: "video-4f338.firebaseapp.com",
    projectId: "video-4f338",
    storageBucket: "video-4f338.appspot.com",
    messagingSenderId: "137723060836",
    appId: "1:137723060836:web:9297158fed376a4fbb3571"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
export default app;