import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
 
 const firebaseConfig = {
    apiKey: "AIzaSyDq1fcL9GxuUw-JxCYNOHmK7IAx15FiD4g",
    authDomain: "ntpc-test.firebaseapp.com",
    databaseURL: "https://ntpc-test.firebaseio.com",
    projectId: "ntpc-test",
    storageBucket: "ntpc-test.appspot.com",
    messagingSenderId: "390567912142",
    appId: "1:390567912142:web:ebf686e301844d847d269f"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
