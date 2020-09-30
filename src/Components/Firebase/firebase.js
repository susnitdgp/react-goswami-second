import app from "firebase/app";
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
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
  doSignOut = () => this.auth.signOut();

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

}
 
export default Firebase;
