import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxVLsfvdfvhgXlaI6WS20ploZ-QIKF3go",
  authDomain: "live-chatbox-26e1b.firebaseapp.com",
  projectId: "live-chatbox-26e1b",
  storageBucket: "live-chatbox-26e1b.appspot.com",
  messagingSenderId: "940530101738",
  appId: "1:940530101738:web:9648bdb7fc126041ec9693",
  measurementId: "G-74TWXE6V7N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
