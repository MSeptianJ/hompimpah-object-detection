import { AuthSignIn } from '../libs/firebase/FirebaseAuth';

const SignIn = async (user) => {
	if (!user.length) {
		AuthSignIn();
	}
};

export default SignIn;
