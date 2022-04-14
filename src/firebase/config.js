import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2_KygQDgSwLH3Uyxj3qJ9l2Qv3-_6GEQ",
  authDomain: "tweet---r.firebaseapp.com",
  projectId: "tweet---r",
  storageBucket: "tweet---r.appspot.com",
  messagingSenderId: "443312823644",
  appId: "1:443312823644:web:a8cb42ec18e13fba31b599",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
