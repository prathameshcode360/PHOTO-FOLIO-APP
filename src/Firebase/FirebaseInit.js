import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDbxpOAV3-SzvkrRQK9_QSx8Hb4PQfVAk",
  authDomain: "photo-folio-68e94.firebaseapp.com",
  projectId: "photo-folio-68e94",
  storageBucket: "photo-folio-68e94.firebasestorage.app",
  messagingSenderId: "747017123864",
  appId: "1:747017123864:web:f48d7ad16ed9efc97e6b6d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
