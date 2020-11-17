

import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCudpMkqVs4mmHn1Fj0WmpB3kdDAIJ0gNw",
    authDomain: "todo-app-d324a.firebaseapp.com",
    databaseURL: "https://todo-app-d324a.firebaseio.com",
    projectId: "todo-app-d324a",
    storageBucket: "todo-app-d324a.appspot.com",
    messagingSenderId: "340259041531",
    appId: "1:340259041531:web:068c536f2ed3715790805e",
    measurementId: "G-865ECJDPBD"
  
})

const db = firebaseApp.firestore();

export default db;