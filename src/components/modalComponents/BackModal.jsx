import { useAtom } from 'jotai';
import { anonUserAtom, backConfirmAtom } from '../../libs/atoms';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import BtnPrimary from '../smallComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';
import { delGameRound } from '../../libs/firebase/FirebaseDB';

const BackModal = () => {
	const [back, setBack] = useAtom(backConfirmAtom);
	const [userData, setUserData] = useAtom(anonUserAtom);

	const handleCancel = () => {
		setBack(!back);
	};

	const handleGoBack = () => {
		history.back();
		setBack(!back);
		delGameRound(userData);
		setUserData({});
		AuthSignOut();
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Hompimpah" />

			<div className=" row-span-4 w-full">
				<div className=" mx-auto h-full w-3/4 gap-4 rounded-sm bg-slate-500 p-6 shadow-lg">
					<p>Apakah benar anda ingin keluar dari permainan?</p>
				</div>
			</div>

			<div className=" mx-auto grid w-full max-w-md grid-cols-2 gap-4 px-4 text-center">
				<BtnPrimary
					text="Yes"
					btnFunction={handleGoBack}
					btnStyles="bg-slate-500 hover:bg-gray-700"
				/>
				<BtnPrimary
					text="Cancel"
					btnFunction={handleCancel}
					btnStyles="bg-slate-500 hover:bg-gray-700"
				/>
			</div>
		</div>
	);
};

BackModal.propTypes = {};

export default BackModal;
