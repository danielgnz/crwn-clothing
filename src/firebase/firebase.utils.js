import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
  var config = {
    apiKey: "AIzaSyC910GxtcmDttIBwz8DDZ1kQzRNzMMA5b4",
    authDomain: "crwn-db-aaf7b.firebaseapp.com",
    databaseURL: "https://crwn-db-aaf7b.firebaseio.com",
    projectId: "crwn-db-aaf7b",
    storageBucket: "",
    messagingSenderId: "292984039096",
    appId: "1:292984039096:web:ee94a4c1640675fe"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth ) return;

     const userRef = firestore.doc(`users/${userAuth.uid}`);

     const snapShot = await userRef.get();

     if(!snapShot.exists) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         });
       } catch(error) {
           console.log('error creating user', error.message);
         }
       }

       return userRef;
     }

  // Initialize Firebase
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;