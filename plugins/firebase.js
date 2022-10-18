import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAlyfFAZK9uX9SXaUqYLhis6cUFGaldtx4",
    authDomain: "netflex-228a6.firebaseapp.com",
    projectId: "netflex-228a6",
    storageBucket: "netflex-228a6.appspot.com",
    messagingSenderId: "773303993428",
    appId: "1:773303993428:web:4e90d0be2d696f806a19c1",
  });
}

export default firebase;
