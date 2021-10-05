
import firebase from "firebase/app"
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCU91vsgjB0nOqDgB5QU83TybwPVW0Kexk",
    authDomain: "bimmer-bros.firebaseapp.com",
    projectId: "bimmer-bros",
    storageBucket: "bimmer-bros.appspot.com",
    messagingSenderId: "112720028778",
    appId: "1:112720028778:web:29122c12bc9cfed4315613",
    measurementId: "G-E8RMNPXQ35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //thats a function for timw stamp

export { projectStorage, projectFirestore, timestamp };