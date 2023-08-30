import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {};

firebase.initializeApp(firebaseConfig);

export { firebase };
