import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpaAlNPJvZGS-KQZ_Kn3zj5CqSWYqXa7w",
  authDomain: "lockdoor-24296.firebaseapp.com",
  databaseURL: "https://lockdoor-24296.firebaseio.com",
  projectId: "lockdoor-24296",
  storageBucket: "",
  messagingSenderId: "992459254577",
  appId: "1:992459254577:web:997a57f17cf5cb63"
};
const fb = firebase.initializeApp(firebaseConfig);
fb.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export const firebaseApp = fb;
