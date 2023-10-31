import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { anonUserAtom } from '../libs/atoms';
import { auth } from '../libs/config/firebase';

const useGetUser = () => {
	const [userData, setUserData] = useAtom(anonUserAtom);
	const unSub = onAuthStateChanged(auth, (user) => {
		if (user) {
			setUserData(user);
		}
	});

	unSub();

	return userData;
};

export default useGetUser;
