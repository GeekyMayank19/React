// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCSc1NDCNYNVjkCjGrxv1m_ORq8J7BG-sM",
    authDomain: "linkedin-clone-bc9ef.firebaseapp.com",
    projectId: "linkedin-clone-bc9ef",
    storageBucket: "linkedin-clone-bc9ef.appspot.com",
    messagingSenderId: "1077154558720",
    appId: "1:1077154558720:web:76e2c3cab4090e291bb9e5",
    measurementId: "G-FTSXZ8VHRF"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)
  const db =firebaseapp.firestore();
  const auth = firebase.auth();
  export {db, auth}

  