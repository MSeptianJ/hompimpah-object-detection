import { AuthSignIn } from '../libs/firebase/FirebaseAuth';

export const SignIn = (user) => {
	if (!user.length) {
		AuthSignIn();
	}
};
