import PropTypes from 'prop-types';
import { useAtom, useSetAtom } from 'jotai';
import {
	gameResultAtom,
	gameStateAtom,
	gamesAtom,
	uidAtom,
} from '../../libs/atoms';
import BtnPrimary from '../smallComponents/BtnPrimary';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import { delGameRound } from '../../libs/firebase/FirebaseDB';
import { RESET } from 'jotai/utils';

const GameResultModal = ({ result }) => {
	const [uid, setUid] = useAtom(uidAtom);
	const setGameState = useSetAtom(gameStateAtom);
	const setGames = useSetAtom(gamesAtom);
	const setGameResult = useSetAtom(gameResultAtom);

	const handleGoBack = async () => {
		await delGameRound(uid);
		await AuthSignOut();
		history.back();
		setGameState(false);
		setGameResult(null);
		setGames(RESET);
		setUid(RESET);
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-4 items-center shadow-lg">
			<div className=" row-span-4 mx-auto w-3/4 rounded-sm bg-slate-500 p-3">
				<div className=" mx-auto h-full w-full p-3">
					<h4 className=" text-lg font-bold uppercase">You {result}</h4>
				</div>
				<div className=" mx-auto w-1/2 max-w-md text-center">
					<BtnPrimary
						text="Menu"
						btnFunction={handleGoBack}
						btnStyles="bg-slate-600 hover:bg-gray-700"
					/>
				</div>
			</div>
		</div>
	);
};

GameResultModal.propTypes = {
	result: PropTypes.string,
};

export default GameResultModal;
