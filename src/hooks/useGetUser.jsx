import { onAuthStateChanged } from 'firebase/auth';
import { useAtom } from 'jotai';
import { uidAtom } from '../libs/atoms';
import { auth } from '../libs/config/firebase';

const useGetUid = () => {
	const [uid, setUid] = useAtom(uidAtom);
	const unSub = onAuthStateChanged(auth, (user) => {
		if (user) {
			setUid(user.uid);
		}
	});

	unSub();

	return uid;
};

export default useGetUid;
