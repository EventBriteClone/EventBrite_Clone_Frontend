import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYZguUFzywghCNYn9tyO1XMCtVjFRcIo",
  authDomain: "software-project-a8620.firebaseapp.com",
  projectId: "software-project-a8620",
  storageBucket: "software-project-a8620.appspot.com",
  messagingSenderId: "560526800673",
  appId: "1:560526800673:web:31dff616ade2da397bb060",
  measurementId: "G-0FFFFTHH8V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
