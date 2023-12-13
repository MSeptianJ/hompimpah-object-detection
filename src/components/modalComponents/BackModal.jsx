import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import {
	backModalAtom,
	checkingModelAtom,
	gamesAtom,
	roundNumberAtom,
	roundResultAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import { delGameRound } from '../../libs/firebase/FirebaseDB';
import BtnPrimary from '../btnComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';
import Boxes from '../smallComponents/Boxes';

const BackModal = () => {
	// Modal
	const setBackModal = useSetAtom(backModalAtom);

	// State
	const setCheckingModel = useSetAtom(checkingModelAtom);
	const setGames = useSetAtom(gamesAtom);
	const setRoundResult = useSetAtom(roundResultAtom);
	const setRoundNumber = useSetAtom(roundNumberAtom);
	const [userUID, setUserUID] = useAtom(userUIDAtom);

	const handleCancel = () => {
		setBackModal(false);
	};

	const handleGoBack = async () => {
		await delGameRound(userUID);
		await AuthSignOut();

		setBackModal(false);

		setRoundResult(null);
		setGames(RESET);
		setRoundNumber(RESET);
		setUserUID(RESET);
		setCheckingModel(RESET);

		history.back();
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-backColor">
			<Boxes />
			<TitlePage titleText="Hompimpah" />

			<div className=" z-0 row-span-4 mx-auto grid w-3/4 gap-4 overflow-y-auto rounded-[4px] bg-primaryColor p-6 text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)]">
				<p>Apakah benar anda ingin keluar dari permainan?</p>
			</div>

			<div className=" mx-auto grid w-full max-w-md grid-cols-2 gap-4 px-4 text-center">
				<div className=" group relative m-auto w-3/4 rounded-[4px] bg-primaryColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:text-accentColor ">
					<BtnPrimary
						btnText="Yes"
						btnFunction={handleGoBack}
						btnStyles=" w-full p-3 flex items-center justify-center"
					/>
				</div>
				<div className=" group relative m-auto w-3/4 rounded-[4px] bg-accentColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:border hover:border-accentColor hover:bg-primaryColor hover:text-accentColor ">
					<BtnPrimary
						btnText="Cancel"
						btnFunction={handleCancel}
						btnStyles=" w-full p-3 flex items-center justify-center"
					/>
				</div>
			</div>
		</div>
	);
};

BackModal.propTypes = {};

export default BackModal;
