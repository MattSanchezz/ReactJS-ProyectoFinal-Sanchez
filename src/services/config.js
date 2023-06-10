import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAD-jr4KVXVDAgpAs_SbBjfYJOmxeBlpBI",
  authDomain: "tienda--indumendiente.firebaseapp.com",
  projectId: "tienda--indumendiente",
  storageBucket: "tienda--indumendiente.appspot.com",
  messagingSenderId: "91263457407",
  appId: "1:91263457407:web:a61c39f29e9c9abe9c074a"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);