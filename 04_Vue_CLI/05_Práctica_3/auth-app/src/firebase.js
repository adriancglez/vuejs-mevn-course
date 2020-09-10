import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaLAaxw5APV7KMINxnuT_oMC0ANhsYRuU",
    authDomain: "auth-app-69877.firebaseapp.com",
    databaseURL: "https://auth-app-69877.firebaseio.com",
    projectId: "auth-app-69877",
    storageBucket: "auth-app-69877.appspot.com",
    messagingSenderId: "329888766618",
    appId: "1:329888766618:web:cd02726b60e28cca359d23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };