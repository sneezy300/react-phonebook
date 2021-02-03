import firebase from 'firebase/app';
import 'firebase/firestore';




// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBc3XSV8XaRXyJuwJDE79-A2sA_apzVuAk",
    authDomain: "contact-book-58230.firebaseapp.com",
    projectId: "contact-book-58230",
    storageBucket: "contact-book-58230.appspot.com",
    messagingSenderId: "134463670087",
    appId: "1:134463670087:web:a5beb58dc1917b4573ae62"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;