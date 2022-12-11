import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDXbsi7aA_1mO_7--3IuJzBW5Rj_6INplc",
    authDomain: "gamenews-16361.firebaseapp.com",
    projectId: "gamenews-16361",
    storageBucket: "gamenews-16361.appspot.com",
    messagingSenderId: "684631253057",
    appId: "1:684631253057:web:7479e54a2206ef12c266c0"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }