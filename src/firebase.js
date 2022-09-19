import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyATW-ww_XNdGl9ZmCBM_uOmreAJH_rmufw",
    authDomain: "chat-4a971.firebaseapp.com",
    projectId: "chat-4a971",
    storageBucket: "chat-4a971.appspot.com",
    messagingSenderId: "7707285036",
    appId: "1:7707285036:web:b4a09ccbbe00d62cb1a389",
    measurementId: "G-CY4Z1H37L1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

