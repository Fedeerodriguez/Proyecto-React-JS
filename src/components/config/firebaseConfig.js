import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBJ7igI6yPrYlUrWffzjLYtqqnip_wXe8w",
  authDomain: "ecommerce-413f6.firebaseapp.com",
  projectId: "ecommerce-413f6",
  storageBucket: "ecommerce-413f6.appspot.com",
  messagingSenderId: "135144961381",
  appId: "1:135144961381:web:9b5e70adea813f26bc9d8c"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)