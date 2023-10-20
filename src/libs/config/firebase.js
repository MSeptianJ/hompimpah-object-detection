import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const vites = import.meta.env;
const firebaseConfig = {
	apiKey: vites.VITE_FIRE_apikey,
	authDomain: vites.VITE_FIRE_authDomain,
	projectId: vites.VITE_FIRE_projectId,
	storageBucket: vites.VITE_FIRE_storageBucket,
	messagingSenderId: vites.VITE_FIRE_messagingSenderId,
	appId: vites.VITE_FIRE_appId,
	measurementId: vites.VITE_FIRE_measurementId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
