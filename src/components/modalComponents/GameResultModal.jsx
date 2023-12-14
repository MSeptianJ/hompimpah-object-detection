import { useAtom, useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOSE from '../../assets/img/lose-ilust.svg';
import WIN from '../../assets/img/win-ilust.svg';
import {
	checkingModelAtom,
	gameEndModalAtom,
	gamePlayedStateAtom,
	gamesAtom,
	plsAddGameStateAtom,
	roundNumberAtom,
	roundResultAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignOut } from '../../libs/firebase/FirebaseAuth';
import { delGameRound } from '../../libs/firebase/FirebaseDB';
import { playLoseGameSound, playWinGameSound } from '../../scripts/sound';
import BtnPrimary from '../btnComponents/BtnPrimary';
import Boxes from '../smallComponents/Boxes';

const GameResultModal = ({ result }) => {
	// Navigation
	const navigate = useNavigate();
	// Game State
	const setGameEndModalState = useSetAtom(gameEndModalAtom);
	const setPlsAddGameState = useSetAtom(plsAddGameStateAtom);
	const setGamePlayedState = useSetAtom(gamePlayedStateAtom);
	const setCheckingModel = useSetAtom(checkingModelAtom);
	const setRoundNumber = useSetAtom(roundNumberAtom);

	// Something Inside
	const [userUID, setUserUID] = useAtom(userUIDAtom);
	const setGames = useSetAtom(gamesAtom);
	const setRoundResult = useSetAtom(roundResultAtom);

	const resetGame = () => {
		setGameEndModalState(false);
		setRoundResult(null);
		setGames(RESET);
		setRoundNumber(RESET);
		setGamePlayedState(true);
	};

	const handlePlayAgain = async () => {
		resetGame();
		setPlsAddGameState(true);
	};

	const handleEndGame = async () => {
		await delGameRound(userUID);
		await AuthSignOut();

		resetGame();
		setUserUID(RESET);
		setCheckingModel(RESET);
	};

	const handleBackToMenu = async () => {
		handleEndGame();
		navigate('/');
	};

	const playSound = useCallback(() => {
		if (result === 'Win') playWinGameSound();
		if (result === 'Lose') playLoseGameSound();
	}, [result]);

	useEffect(() => {
		playSound();
	}, [playSound]);

	return (
		<div className=" absolute grid h-full w-full grid-rows-5 items-center backdrop-blur-sm ">
			<Boxes />
			<div></div>

			<div className=" z-0 row-span-3 mx-auto grid h-full w-3/4 grid-rows-5 items-center rounded-[4px] bg-primaryColor text-backColor shadow-lg shadow-[rbga(0,0,0,0.3)]">
				<div className=" mx-auto w-full">
					{result === 'Win' ? (
						<h4 className=" bg-green-600 text-lg font-bold uppercase shadow-lg shadow-[rbga(0,0,0,0.3)]">
							You {result}
						</h4>
					) : (
						<h4 className=" bg-red-600 text-lg font-bold uppercase shadow-lg shadow-[rbga(0,0,0,0.3)]">
							You {result}
						</h4>
					)}
				</div>

				<div className=" row-span-2 h-full w-full p-4">
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

				<div className=" row-span-2 mx-auto grid w-full max-w-md grid-cols-2 grid-rows-2 gap-4 px-4 text-center">
					<div className=" group col-span-2 m-auto w-full rounded-[4px] bg-accentColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:border hover:border-accentColor hover:bg-primaryColor ">
						<Link to={'/survey'}>
							<BtnPrimary
								btnText="App Survey"
								btnFunction={handleEndGame}
								btnStyles="w-full p-3 transition-colors duration-300 group-hover:text-accentColor"
							/>
						</Link>
					</div>

					<div className=" group m-auto w-full rounded-[4px] bg-primaryColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-accentColor ">
						<BtnPrimary
							btnText="Menu"
							btnFunction={handleBackToMenu}
							btnStyles="w-full p-3"
						/>
					</div>

					<div className=" group m-auto w-full rounded-[4px] bg-primaryColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-accentColor ">
						<BtnPrimary
							btnText="PLay Again"
							btnFunction={handlePlayAgain}
							btnStyles="w-full p-3"
						/>
					</div>
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
