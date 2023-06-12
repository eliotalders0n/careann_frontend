// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1yiNzh-oMiDMitDhpcCH_MRNMI_MQFGo",
  authDomain: "tank-b3381.firebaseapp.com",
  databaseURL: "https://tank-b3381-default-rtdb.firebaseio.com",
  projectId: "tank-b3381",
  storageBucket: "tank-b3381.appspot.com",
  messagingSenderId: "983300263498",
  appId: "1:983300263498:web:2dd458050ee7e75f66e0b3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
