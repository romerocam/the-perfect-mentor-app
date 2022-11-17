// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWJqPFJDOmyELvQ5FUCg3bietEvEFJNIM",
    authDomain: "the-perfect-mentor-app.firebaseapp.com",
    projectId: "the-perfect-mentor-app",
    storageBucket: "the-perfect-mentor-app.appspot.com",
    messagingSenderId: "562273564300",
    appId: "1:562273564300:web:cc5b5bfc27cd744f2aeda9"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }