
//import firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3ujrNp_AbNFegI7YskmAl3nhNIMOXYDg",
  authDomain: "whatsapp-clone-1c579.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-1c579-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-1c579",
  storageBucket: "whatsapp-clone-1c579.appspot.com",
  messagingSenderId: "888055122605",
  appId: "1:888055122605:web:d695d60ae73ec6a2b29424",
  measurementId: "G-0RPRJP429Z"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
