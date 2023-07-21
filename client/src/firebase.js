
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA-ZciLILa8z4-3zKtV4X8_8nb3OyuTgZc",
    authDomain: "video-5161b.firebaseapp.com",
    projectId: "video-5161b",
    storageBucket: "video-5161b.appspot.com",
    messagingSenderId: "538541732526",
    appId: "1:538541732526:web:e24b65f575ef27261fb33f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const provider = new GoogleAuthProvider();
export default app;