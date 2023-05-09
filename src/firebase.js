import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB20IAthBVZeYvcM7GCqId6WDH7kEQ2X5k",
    authDomain: "todo-app-e475d.firebaseapp.com",
    databaseURL: "https://todo-app-e475d-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "todo-app-e475d",
    storageBucket: "todo-app-e475d.appspot.com",
    messagingSenderId: "973029307483",
    appId: "1:973029307483:web:0d899a80200d3998887b7e"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);