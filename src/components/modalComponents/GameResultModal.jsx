import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import LOSE from '../../assets/img/lose-ilust.svg';
import WIN from '../../assets/img/win-ilust.svg';
import {
	gameEndModalAtom,
	gamePlayedStateAtom,
	gamesAtom,
	plsAddGameStateAtom,
	roundResultAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import { delGameRound } from '../../libs/firebase/FirebaseDB';
import { playLoseGameSound, playWinGameSound } from '../../scripts/sound';
import BtnPrimary from '../smallComponents/BtnPrimary';

const GameResultModal = ({ result }) => {
	// Game State
	const setGameEndModalState = useSetAtom(gameEndModalAtom);
	const setPlsAddGameState = useSetAtom(plsAddGameStateAtom);
	const setGamePlayedState = useSetAtom(gamePlayedStateAtom);

	// Something Inside
	const [userUID, setUserUID] = useAtom(userUIDAtom);
	const setGames = useSetAtom(gamesAtom);
	const setRoundResult = useSetAtom(roundResultAtom);

	const handlePlayAgain = async () => {
		setGameEndModalState(false);

		setRoundResult(null);
		setGames(RESET);
		setGamePlayedState(true);

		setPlsAddGameState(true);
	};

	const handleBackToMenu = async () => {
		await delGameRound(userUID);
		await AuthSignOut();

		setGameEndModalState(false);

		setRoundResult(null);
		setGames(RESET);
		setUserUID(RESET);
		setGamePlayedState(true);

		history.back();
	};

	const playSound = useCallback(() => {
		if (result === 'Win') playWinGameSound();
		if (result === 'Lose') playLoseGameSound();
	}, [result]);

	useEffect(() => {
		playSound();
	}, [playSound]);

	return (
		<div className=" absolute grid h-full w-full grid-rows-5 items-center shadow-lg backdrop-blur-sm">
			<div></div>

			<div className=" row-span-3 mx-auto grid h-full w-3/4 grid-rows-4 items-center rounded-sm bg-slate-500">
				<div className=" mx-auto w-full p-3">
					{result === 'Win' ? (
						<h4 className=" bg-green-500 text-lg font-bold uppercase">
							You {result}
						</h4>
					) : (
						<h4 className=" bg-red-500 text-lg font-bold uppercase">
							You {result}
						</h4>
					)}
				</div>

				<div className=" row-span-2 h-full w-full p-2">
					{result === 'Win' ? (
						<img
							className=" h-full w-full object-contain"
							src={WIN}
							alt="Winning Ilust"
						/>
					) : (
						<img
							className=" h-full w-full object-contain"
							src={LOSE}
							alt="Losing Ilust"
						/>
					)}
				</div>

				<div className=" mx-auto grid w-full max-w-md grid-cols-2 gap-4 px-3 text-center">
					<BtnPrimary
						btnText="Menu"
						btnFunction={handleBackToMenu}
						btnStyles="bg-slate-600 hover:bg-gray-700"
					/>
					<BtnPrimary
						btnText="Play Again"
						btnFunction={handlePlayAgain}
						btnStyles="bg-blue-500 hover:bg-gray-700"
					/>
				</div>
			</div>

			<div></div>
		</div>
	);
};

GameResultModal.propTypes = {
	result: PropTypes.string,
};

export default GameResultModal;
