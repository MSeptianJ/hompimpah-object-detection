import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { anonUserAtom } from '../libs/atoms';
import { auth } from '../libs/config/firebase';

const useGetUser = () => {
	const [userData, setUserData] = useAtom(anonUserAtom);
	onAuthStateChanged(auth, (user) => {
		if (user) {
			setUserData(user);
		}
	});

	return userData;
};

export default useGetUser;
