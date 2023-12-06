import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import {
	backModalAtom,
	checkingModelAtom,
	gamesAtom,
	roundResultAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import { delGameRound } from '../../libs/firebase/FirebaseDB';
import BtnPrimary from '../smallComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';

const BackModal = () => {
	const setBackModal = useSetAtom(backModalAtom);
	const [userUID, setUserUID] = useAtom(userUIDAtom);
	const setGames = useSetAtom(gamesAtom);
	const setRoundResult = useSetAtom(roundResultAtom);
	const setCheckingModel = useSetAtom(checkingModelAtom);

	const handleCancel = () => {
		setBackModal(false);
	};

	const handleGoBack = async () => {
		await delGameRound(userUID);
		await AuthSignOut();

		setBackModal(false);

		setRoundResult(null);
		setGames(RESET);
		setUserUID(RESET);
		setCheckingModel(RESET);

		history.back();
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
					btnText="Yes"
					btnFunction={handleGoBack}
					btnStyles="bg-slate-500 hover:bg-gray-700"
				/>
				<BtnPrimary
					btnText="Cancel"
					btnFunction={handleCancel}
					btnStyles="bg-slate-500 hover:bg-gray-700"
				/>
			</div>
		</div>
	);
};

BackModal.propTypes = {};

export default BackModal;
