import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import BackModal from '../../components/modalComponents/BackModal';
import GameResultModal from '../../components/modalComponents/GameResultModal';
import WebCamRealTime from '../../components/modalComponents/RealtimeElement/WebCamRealTime';
import RoundResultModal from '../../components/modalComponents/RoundResultModal';
import TutorialModal from '../../components/modalComponents/TutorialModal';
import BackMenuBtn from '../../components/smallComponents/BackMenuBtn';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import NoUserPlacement from '../../components/smallComponents/noUserPlacement';
import {
	backModalAtom,
	checkingModelAtom,
	detectDataAtom,
	gameEndModalAtom,
	gamesAtom,
	imgAccStateAtom,
	plsAddGameStateAtom,
	plyMovedStateAtom,
	roundEndModalAtom,
	roundResultAtom,
	sysMovedStateAtom,
	tutorModalAtom,
	userUIDAtom,
	webCamModalAtom,
} from '../../libs/atoms';
import {
	addGameRound,
	addPlayerMove,
	addSystemMove,
	getAllGame,
} from '../../libs/firebase/FirebaseDB';
import ScoringRPS from '../../scripts/ScoringRPS';
import SingleContent from './components/SingleContent';

const Single = () => {
	// Modals
	const [backModal] = useAtom(backModalAtom);
	const [tutorModal] = useAtom(tutorModalAtom);
	const [camModal, setCamModal] = useAtom(webCamModalAtom);
	const [roundEndModal, setRoundEndModal] = useAtom(roundEndModalAtom);
	const [gameEndModal, setGameEndModal] = useAtom(gameEndModalAtom);
	const [checkingModel] = useAtom(checkingModelAtom);

	// Game State
	const [plsAddGameState, setPlsAddGameState] = useAtom(plsAddGameStateAtom);
	const [imgAccState, setImgAccState] = useAtom(imgAccStateAtom);
	const [plyMovedState, setPlyMovedState] = useAtom(plyMovedStateAtom);
	const [sysMovedState, setSysMovedState] = useAtom(sysMovedStateAtom);

	// Something inside
	const [userUID] = useAtom(userUIDAtom);
	const [detection, setDetection] = useAtom(detectDataAtom);
	const [games, setGameData] = useAtom(gamesAtom);
	const [roundResult, setRoundResult] = useAtom(roundResultAtom);

	// RoundState
	const gameRound = games.find((game) => game?.id === userUID);
	const P1Choise = gameRound?.choisePA;
	const P2Choise = gameRound?.choisePB;
	const P1Score = gameRound?.scorePA;
	const P2Score = gameRound?.scorePB;

	const AddGame = useCallback(async () => {
		if (plsAddGameState && !gameRound) {
			await addGameRound(userUID);
			setGameData(await getAllGame());

			setPlsAddGameState(false);
			if (checkingModel) {
				setCamModal(true);
			}
		}
	}, [plsAddGameState, gameRound]); // eslint-disable-line

	const PlayerMove = useCallback(async () => {
		if (imgAccState) {
			await addPlayerMove(gameRound, detection, userUID);
			setGameData(await getAllGame());
			setDetection(null);

			setImgAccState(false);
			setPlyMovedState(true);
		}
	}, [imgAccState]); // eslint-disable-line

	const SystemMove = useCallback(async () => {
		if (plyMovedState) {
			await addSystemMove(gameRound, userUID);
			setGameData(await getAllGame());

			setPlyMovedState(false);
			setSysMovedState(true);
		}
	}, [plyMovedState]); // eslint-disable-line

	const Scoring = useCallback(async () => {
		if (sysMovedState) {
			const result = await ScoringRPS(P1Choise, P2Choise, gameRound, userUID);
			setGameData(await getAllGame());
			setRoundResult(result);

			setSysMovedState(false);

			setRoundEndModal(true);
		}
	}, [sysMovedState]); // eslint-disable-line

	const EndGame = useCallback(async () => {
		if (P1Score === 3 || P2Score === 3) {
			setRoundEndModal(false);

			setGameEndModal(true);
		}
	}, [P1Score, P2Score]); // eslint-disable-line

	useEffect(() => {
		AddGame();
		PlayerMove();
		SystemMove();
		Scoring();
		EndGame();
	}, [AddGame, PlayerMove, SystemMove, Scoring, EndGame]);

	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="Single Player" />

			<div className=" row-span-4 h-full w-full">
				<div className=" mx-auto grid h-full w-2/3 grid-rows-2 items-center gap-3 overflow-y-auto rounded-sm bg-slate-300 p-6 shadow-lg">
					{userUID ? (
						<SingleContent
							P1Choise={P1Choise}
							P1Score={P1Score}
							P2Choise={P2Choise}
							P2Score={P2Score}
						/>
					) : (
						<NoUserPlacement />
					)}
				</div>
			</div>

			{userUID ? <GameMenu /> : <BackMenuBtn />}

			{gameEndModal && <GameResultModal result={roundResult} />}
			{roundEndModal && <RoundResultModal result={roundResult} />}
			{backModal && <BackModal />}
			{tutorModal && <TutorialModal />}
			{camModal && <WebCamRealTime />}
		</div>
	);
};

export default Single;
