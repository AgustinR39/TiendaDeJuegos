import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAI7zc6nyxa08ZZYSTvlBMLy2pnp9kttnY",
    authDomain: "tiendajuegos31145.firebaseapp.com",
    projectId: "tiendajuegos31145",
    storageBucket: "tiendajuegos31145.appspot.com",
    messagingSenderId: "214941152935",
    appId: "1:214941152935:web:1e4db67e1dfc7c13108d82"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)