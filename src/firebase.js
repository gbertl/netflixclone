import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5-PhNhjCVO1k0zEnIbHgkLIhCUrygZ54",
  authDomain: "netflixclone-d2648.firebaseapp.com",
  projectId: "netflixclone-d2648",
  storageBucket: "netflixclone-d2648.appspot.com",
  messagingSenderId: "354571455659",
  appId: "1:354571455659:web:a33f2fbc53d0c6b5353bee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // initialize your firebase app
const db = firebaseApp.firestore(); // initialize database(firestore) for the app
const auth = firebase.auth(); // initialize auth from firebase

export {auth}; // explicit exports can be many
export default db; // can have one default export only
