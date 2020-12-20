// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDknEAuIzqsjpf_x7hOq5CB0eBv4f-SUG8",
    authDomain: "whatsapp-clone-2043c.firebaseapp.com",
    projectId: "whatsapp-clone-2043c",
    storageBucket: "whatsapp-clone-2043c.appspot.com",
    messagingSenderId: "942978023501",
    appId: "1:942978023501:web:25851606c82c0d67bfdc04",
    measurementId: "G-WF286DR7D8"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore( )
    const auth = firebase.auth()
    const provider =new firebase.auth.GoogleAuthProvider();
    export {auth, provider}
    export default db;
 