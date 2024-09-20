// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC1h63akpHeO263QkYrnc1R_PqyAOODvc",
  authDomain: "tara-master.firebaseapp.com",
  projectId: "tara-master",
  storageBucket: "tara-master.appspot.com",
  messagingSenderId: "1084940289554",
  appId: "1:1084940289554:web:3d1e4db0a73d347d0abacb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
