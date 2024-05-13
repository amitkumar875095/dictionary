import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAnm5-zLKNrAlc30VIWH8xo2-o2Tm89O7g",
  authDomain: "dict-9577f.firebaseapp.com",
  projectId: "dict-9577f",
  storageBucket: "dict-9577f.appspot.com",
  messagingSenderId: "339984043872",
  appId: "1:339984043872:web:5a85d0b5322058aee0d805"
};
 const app = initializeApp(firebaseConfig);
 export default app;