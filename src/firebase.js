import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDY8n146KlQrT3TeFS3QWAwZGU0Hy88Cnc',
  authDomain: 'test-ecf1d.firebaseapp.com',
  projectId: 'test-ecf1d',
  storageBucket: 'test-ecf1d.appspot.com',
  messagingSenderId: '762797141261',
  appId: '1:762797141261:web:58eb4d7f7fd18652051444',
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const firestore = firebaseApp.firestore();
