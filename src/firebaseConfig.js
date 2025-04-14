import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBg1UDHAHrVnliu_GmKVYogkzhG9tADq1Q",
    authDomain: "pf-react-monti-venesia-franco.firebaseapp.com",
    projectId: "pf-react-monti-venesia-franco",
    storageBucket: "pf-react-monti-venesia-franco.firebasestorage.app",
    messagingSenderId: "1042310314815",
    appId: "1:1042310314815:web:260487e976d11a75e6b18a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore( app )