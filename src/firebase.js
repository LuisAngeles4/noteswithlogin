import firebase from "firebase/compat/app/dist";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDk5RFEE6Jffb_Yg6LcpA-UIs4a9GOFqx4",
  authDomain: "inputfirebasetest.firebaseapp.com",
  projectId: "inputfirebasetest",
  storageBucket: "inputfirebasetest.appspot.com",
  messagingSenderId: "853179612463",
  appId: "1:853179612463:web:f1af8a9a75584b1c91f5da",
};

export default firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

export { auth, providers };
