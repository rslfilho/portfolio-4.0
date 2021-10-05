import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "rslfilho-portfolio.firebaseapp.com",
  projectId: "rslfilho-portfolio",
  storageBucket: "rslfilho-portfolio.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getSkills = async () => {
  try {
    const response = await getDocs(collection(db, 'skills'));
    return response;
  } catch (e) {
    console.log('Error buscando documentos: ', e);
  }
};

export const getFeaturedSkills = async () => {
  try {
    const q = query(collection(db, "skills"), where("display", "==", true));
    const response = await getDocs(q);
    return response;
  } catch (e) {
    console.log('Error buscando documentos: ', e);
  }
}
