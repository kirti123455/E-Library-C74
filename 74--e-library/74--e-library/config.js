import firebase from "firebase";

const firebaseConfig = {

  apiKey: "AIzaSyDQHuXt6FcYu40yAVFTMX0V7uBT--K67Ns",

  authDomain: "class71-5104d.firebaseapp.com",

  databaseURL: "https://class71-5104d-default-rtdb.firebaseio.com",

  projectId: "class71-5104d",

  storageBucket: "class71-5104d.appspot.com",

  messagingSenderId: "1067418861622",

  appId: "1:1067418861622:web:bc7b8ecca0ad246e3a5897"

};



firebase.initializeApp(firebaseConfig);

const app = firebase.firestore();
export default app;