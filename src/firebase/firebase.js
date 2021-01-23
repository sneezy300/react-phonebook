import firebase from "firebase/app"
import "firebase/firestore"
import { firestoreConnect } from "react-redux-firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7g7BsxZhr2j3vhTBVCes8PAV86I_lsNw",
    authDomain: "user-react-77cab.firebaseapp.com",
    projectId: "user-react-77cab",
    storageBucket: "user-react-77cab.appspot.com",
    messagingSenderId: "1012525729007",
    appId: "1:1012525729007:web:93517996e8ef38bfa1471a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default firebase;