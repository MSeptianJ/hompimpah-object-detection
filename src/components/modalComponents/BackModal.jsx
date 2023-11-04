import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import {
	backConfirmAtom,
	gameResultAtom,
	gamesAtom,
	uidAtom,
} from '../../libs/atoms';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import { delGameRound } from '../../libs/firebase/FirebaseDB';
import BtnPrimary from '../smallComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';

const BackModal = () => {
	const setBack = useSetAtom(backConfirmAtom);
	const [uid, setUid] = useAtom(uidAtom);
	const setGames = useSetAtom(gamesAtom);
	const setGameResult = useSetAtom(gameResultAtom);

	const handleCancel = () => {
		setBack(false);
	};

	const handleGoBack = async () => {
		await delGameRound(uid);
		await AuthSignOut();
		history.back();
		setBack(false);
		setGameResult(null);
		setGames(RESET);
		setUid(RESET);
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
