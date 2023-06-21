import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyCZmP4RdhrxW_Qqlav6N_E82WFdLyKL2Wc",
  authDomain: "shift-5c59d.firebaseapp.com",
  projectId: "shift-5c59d",
  storageBucket: "shift-5c59d.appspot.com",
  messagingSenderId: "903550398291",
  appId: "1:903550398291:web:2e0bda498a27a5f6b3bba6"
};

//If an firebase app hasn't already been created
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;