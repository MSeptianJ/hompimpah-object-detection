import { AuthSignIn } from '../libs/firebase/FirebaseAuth';

const SignIn = async (user) => {
	if (!user.length) {
		const userdata = await AuthSignIn();
		return userdata;
	}
};

export default SignIn;
