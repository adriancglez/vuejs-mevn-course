import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCG0L1UPFOoO0Uv_yG7ZtSFq-wD4zaJb-c",
    authDomain: "crud-vue-97fb5.firebaseapp.com",
    databaseURL: "https://crud-vue-97fb5.firebaseio.com",
    projectId: "crud-vue-97fb5",
    storageBucket: "crud-vue-97fb5.appspot.com",
    messagingSenderId: "491893511749",
    appId: "1:491893511749:web:2de79b2c4302ce0a70752c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };