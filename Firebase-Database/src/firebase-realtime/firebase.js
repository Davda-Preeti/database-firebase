// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXw2SS7_QiK1dzEEgq2vrVKRXjVeQpisw",
  authDomain: "fir-react-62d5c.firebaseapp.com",
  databaseURL: "https://fir-react-62d5c-default-rtdb.firebaseio.com",
  projectId: "fir-react-62d5c",
  storageBucket: "fir-react-62d5c.appspot.com",
  messagingSenderId: "657499019074",
  appId: "1:657499019074:web:d99f877276585ce6281adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db