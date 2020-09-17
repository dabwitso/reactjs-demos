import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBirOGErWPgeCnSTxBb_HyKLygBCRsV_Zc",
  authDomain: "login-demo-395e3.firebaseapp.com",
  databaseURL: "https://login-demo-395e3.firebaseio.com",
  projectId: "login-demo-395e3",
  storageBucket: "login-demo-395e3.appspot.com",
  messagingSenderId: "394446292555",
  appId: "1:394446292555:web:ca972e59a41f5659e32fce",
});

const auth = firebase.auth();

export { auth };
