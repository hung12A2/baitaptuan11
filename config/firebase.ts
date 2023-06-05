// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDoLykc-yHxOVLLafZmkKawnITilqxBdus",
	authDomain: "whatsapp-3c650.firebaseapp.com",
	projectId: "whatsapp-3c650",
	storageBucket: "whatsapp-3c650.appspot.com",
	messagingSenderId: "1080828926155",
	appId: "1:1080828926155:web:497e390480acd5bfb7e34e",
	measurementId: "G-56KEKSPDDL"
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export { db, auth, provider }
