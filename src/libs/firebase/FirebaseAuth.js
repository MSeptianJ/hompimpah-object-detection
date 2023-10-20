import { onAuthStateChanged, signInAnonymously, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export const AuthSignIn = async () => {
	try {
		await signInAnonymously(auth);
	} catch (err) {
		console.error(err);
	}
};

export const AuthSignOut = async () => {
	try {
		signOut(auth);
		onAuthStateChanged(auth, (user) => {
			user?.delete();
		});
	} catch (error) {
		console.error(error);
	}
};

export const GetUserInfo = async () => {
	try {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				return user;
			}
		});
	} catch (error) {
		console.error(error);
	}
};
