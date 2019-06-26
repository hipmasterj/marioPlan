import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDh1_zJN-rP7WIY-rHbnqh24of9B24h-DI",
    authDomain: "marioplan-96fc0.firebaseapp.com",
    databaseURL: "https://marioplan-96fc0.firebaseio.com",
    projectId: "marioplan-96fc0",
    storageBucket: "",
    messagingSenderId: "485415539735",
    appId: "1:485415539735:web:100ed8ba702b7a0e"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;