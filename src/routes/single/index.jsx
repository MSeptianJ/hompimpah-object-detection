import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import BackModal from '../../components/modalComponents/BackModal';
import GameResultModal from '../../components/modalComponents/GameResultModal';
import RoundResultModal from '../../components/modalComponents/RoundResultModal';
import TutorialModal from '../../components/modalComponents/TutorialModal';
import WebCamModal from '../../components/modalComponents/WebCamElement/WebCamModal';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import useGetUid from '../../hooks/useGetUser';
import {
	backConfirmAtom,
	detDataAtom,
	gameResultAtom,
	gameStateAtom,
	gamesAtom,
	imgAccAtom,
	plyMovedAtom,
	roundStateAtom,
	sysMovedAtom,
	tutorGameAtom,
	webCamAtom,
} from '../../libs/atoms';
import {
	addGameRound,
	addSystemChoise,
	getAllGame,
} from '../../libs/firebase/FirebaseDB';
import { Score } from '../../scripts/rps';
import SingleContent from './components/SingleContent';

const Single = () => {
	// Modals
	const [back] = useAtom(backConfirmAtom);
	const [tutor] = useAtom(tutorGameAtom);
	const [cam] = useAtom(webCamAtom);
	const [resultState, setResultState] = useAtom(roundStateAtom);
	const [gameState, setGameState] = useAtom(gameStateAtom);

	// State
	const [imgAcc, setImgAcc] = useAtom(imgAccAtom);
	const [plyMoved, setPlyMoved] = useAtom(plyMovedAtom);
	const [sysMoved, setSysMoved] = useAtom(sysMovedAtom);

	// Something inside
	const uid = useGetUid();
	const [detection, setDetection] = useAtom(detDataAtom);
	const [games, setGameData] = useAtom(gamesAtom);
	const [gameResult, setGameResult] = useAtom(gameResultAtom);

	const gameRound = games.find((game) => game?.id === uid);
	const P1Choise = gameRound?.choisePA;
	const P2Choise = gameRound?.choisePB;
	const P1Score = gameRound?.scorePA;
	const P2Score = gameRound?.scorePB;

	const PlayerMove = useCallback(async () => {
		if (imgAcc) {
			await addGameRound(uid, detection, games);
			setGameData(await getAllGame());
			setDetection(null);

			setImgAcc(false);
			setPlyMoved(true);
		}
	}, [imgAcc]); // eslint-disable-line

	const SystemMove = useCallback(async () => {
		if (plyMoved) {
			await addSystemChoise(gameRound, uid);
			setGameData(await getAllGame());

			setPlyMoved(false);
			setSysMoved(true);
		}
	}, [plyMoved]); // eslint-disable-line

	const Scoring = useCallback(async () => {
		if (sysMoved) {
			const result = await Score(P1Choise, P2Choise, gameRound, uid);
			setGameData(await getAllGame());
			setGameResult(result);

			setSysMoved(false);
			setResultState(true);
		}
	}, [sysMoved]); // eslint-disable-line

	const EndGame = useCallback(async () => {
		if (P1Score === 3 || P2Score === 3) {
			setGameState(true);
		}
	}, [P1Score, P2Score]); // eslint-disable-line

	useEffect(() => {
		PlayerMove();
		SystemMove();
		Scoring();
		EndGame();
	}, [PlayerMove, SystemMove, Scoring, EndGame]);

	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="Single Player" />

			<div className=" row-span-4 h-full w-full">
				<div className=" mx-auto grid h-full w-2/3 grid-rows-2 items-center gap-3 overflow-y-auto rounded-sm bg-slate-300 p-6 shadow-lg">
					<SingleContent
						P1Choise={P1Choise}
						P1Score={P1Score}
						P2Choise={P2Choise}
						P2Score={P2Score}
					/>
				</div>
			</div>

			<GameMenu />

			{gameState && <GameResultModal result={gameResult} />}
			{resultState && <RoundResultModal result={gameResult} />}
			{back && <BackModal />}
			{tutor && <TutorialModal />}
			{cam && <WebCamModal />}
		</div>
	);
};

export default Single;
