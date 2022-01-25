import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyAEu75XN_kqLQk2qTLPTemDTusdLbtTAzY",
    authDomain: "chatmessanger-d5380.firebaseapp.com",
    projectId: "chatmessanger-d5380",
    storageBucket: "chatmessanger-d5380.appspot.com",
    messagingSenderId: "980061664470",
    appId: "1:980061664470:web:f9646fa794c9baf8268577",
  })
  .auth();
