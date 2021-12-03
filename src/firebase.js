import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDkwxCJPMQEX-VjOnpwK5DI5kDjMUYLib8",
  authDomain: "richpanel-helpdesk-3159a.firebaseapp.com",
  projectId: "richpanel-helpdesk-3159a",
  storageBucket: "richpanel-helpdesk-3159a.appspot.com",
  messagingSenderId: "859164391445",
  appId: "1:859164391445:web:ca0a2c093d7fc240daf61c"
}).auth();