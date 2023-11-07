import { signInAnonymously, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export const AuthSignIn = async () => {
	try {
		await signInAnonymously(auth);
		return auth?.currentUser.uid;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const AuthSignOut = async () => {
	try {
		signOut(auth);
		auth?.currentUser?.delete();
	} catch (error) {
		console.error(error);
		return error;
	}
};
