import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//config

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'netflix-clone-bead0.firebaseapp.com',
  databaseURL: 'https://netflix-clone-bead0.firebaseio.com',
  projectId: 'netflix-clone-bead0',
  storageBucket: 'netflix-clone-bead0.appspot.com',
  messagingSenderId: '966514666129',
  appId: '1:966514666129:web:91ebe893c5ed142d602d30',
};

const firebase = Firebase.initializeApp(firebaseConfig);

// seed firestore db with dummy content (RUN ONCE)
seedDatabase(firebase);

export { firebase };
