import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCptdTfuLJ3MM8njobUEnTqccd5v1CLEPM",
  authDomain: "pucpr-firebase.firebaseapp.com",
  projectId: "pucpr-firebase",
  storageBucket: "pucpr-firebase.firebasestorage.app",
  messagingSenderId: "832801524375",
  appId: "1:832801524375:web:38b27389c20b37d93737d2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase