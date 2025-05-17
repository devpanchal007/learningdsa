import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "dsalearn-1937f.firebaseapp.com",
    projectId: "dsalearn-1937f",
    storageBucket: "dsalearn-1937f.firebasestorage.app",
    messagingSenderId: "573254619168",
    appId: "1:573254619168:web:4a642733d6a3040621ac45",
    measurementId: "G-6F3NZKKL5P"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
