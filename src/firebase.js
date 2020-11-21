import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuR5bXiQw4YaUUT9CNv_Rk37xTU21bdaM",
  authDomain: "clone-2c933.firebaseapp.com",
  databaseURL: "https://clone-2c933.firebaseio.com",
  projectId: "clone-2c933",
  storageBucket: "clone-2c933.appspot.com",
  messagingSenderId: "234049379968",
  appId: "1:234049379968:web:80bbf63409c122c9261065",
  measurementId: "G-38BPHYQ1MW"
};

//initialize app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//initialize database
const db = firebaseApp.firestore();    //firestore is the real time database in firebase
const auth=firebase.auth(); //here it gives variable we can use for sign in and all 

//To use db and auth outside the file we use export
export {db,auth}