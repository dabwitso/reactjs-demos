import Firebase from "firebase";
  
const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDehZxAQk69x6GWn6c_pFT1b70pgzLQgR0",
  authDomain: "todo-2ebb7.firebaseapp.com",
  databaseURL: "https://todo-2ebb7.firebaseio.com",
  projectId: "todo-2ebb7",
  storageBucket: "todo-2ebb7.appspot.com",
  messagingSenderId: "1085215376100",
  appId: "1:1085215376100:web:73cb69978c8e947723e2f1"
});

const db = firebaseApp.firestore();

export { db };
