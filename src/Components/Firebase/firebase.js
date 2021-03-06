import firebase_app from "firebase/app";
import 'firebase/auth';

 
const firebaseConfig = {
    apiKey: "AIzaSyDq1fcL9GxuUw-JxCYNOHmK7IAx15FiD4g",
    authDomain: "ntpc-test.firebaseapp.com",
    databaseURL: "https://ntpc-test.firebaseio.com",
    projectId: "ntpc-test",
    storageBucket: "ntpc-test.appspot.com",
    messagingSenderId: "390567912142",
    appId: "1:390567912142:web:ebf686e301844d847d269f"
  };


class Firebase {
  constructor() {

    //to avoid duplicate instance error
    if (!firebase_app.apps.length) {
      firebase_app.initializeApp(firebaseConfig);
    }
    //app.initializeApp(firebaseConfig);
    
    this.auth = firebase_app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);




}
 
export default Firebase;
