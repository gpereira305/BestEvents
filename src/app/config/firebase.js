import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';



 
const firebaseConfig = {
    apiKey: "AIzaSyCqqrRHOb42PK7BRm4jUT6JgbvDS3kMFdY",
    authDomain: "bestevents-1eab2.firebaseapp.com",
    projectId: "bestevents-1eab2",
    storageBucket: "bestevents-1eab2.appspot.com",
    messagingSenderId: "613504567532",
    appId: "1:613504567532:web:22542e5cc60e2046827dc9",
    measurementId: "G-VY7FL720DX"
  };


  firebase.initializeApp(firebaseConfig);
  firebase.firestore();


  export default firebase; 