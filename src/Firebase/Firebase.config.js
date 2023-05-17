// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVriBHyox-EbOHeUceRWkZ0FE6Um0J6HA",
  authDomain: "toy-car-e96c2.firebaseapp.com",
  projectId: "toy-car-e96c2",
  storageBucket: "toy-car-e96c2.appspot.com",
  messagingSenderId: "482745731745",
  appId: "1:482745731745:web:0f461c72a5a8b90da73ee0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app