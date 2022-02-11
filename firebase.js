import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0jdK677NHIwQ68Sjwq3xafNPNLL8myuY",
  authDomain: "twitter-clone-1567a.firebaseapp.com",
  projectId: "twitter-clone-1567a",
  storageBucket: "twitter-clone-1567a.appspot.com",
  messagingSenderId: "1076643724970",
  appId: "1:1076643724970:web:59252371ce665714f69ad3",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
