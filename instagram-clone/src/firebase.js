
  import firebase from "firebase"

  const firebaseApp=firebase.initializeApp({

    
    apiKey: "AIzaSyDSx-SXqZxyqd6joNQRj5_qg-vw-bpcFQE",
    authDomain: "instagram-clone-9698d.firebaseapp.com",
    databaseURL: "https://instagram-clone-9698d.firebaseio.com",
    projectId: "instagram-clone-9698d",
    storageBucket: "instagram-clone-9698d.appspot.com",
    messagingSenderId: "1032063125367",
    appId: "1:1032063125367:web:0652a63c5d8eabaaaf4372",
    measurementId: "G-1LE8WTBC90"
 

  })

  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage =firebase.storage()
  export{db,auth, storage}

