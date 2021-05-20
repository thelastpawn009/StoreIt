import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBk5jexfxn1S2iXTNgDxrVmqHKS8JW7Vww",
    authDomain: "drive-clone-6b6be.firebaseapp.com",
    projectId: "drive-clone-6b6be",
    storageBucket: "drive-clone-6b6be.appspot.com",
    messagingSenderId: "822228362677",
    appId: "1:822228362677:web:4588379e987b246dc765fc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }