import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import BackModal from '../../components/modalComponents/BackModal';
import TutorialModal from '../../components/modalComponents/TutorialModal';
import WebCamModal from '../../components/modalComponents/WebCamElement/WebCamModal';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import {
	accImgAtom,
	anonUserAtom,
	backConfirmAtom,
	gameResultAtom,
	gamesAtom,
	resultAtom,
	sysMovedAtom,
	tutorGameAtom,
	webCamAtom,
} from '../../libs/atoms';
import { addSystemChoise, getAllGame } from '../../libs/firebase/FirebaseDB';
import { Score } from '../../scripts/rps';
import SingleContent from './components/SingleContent';
import ResultModal from '../../components/modalComponents/ResultModal';

const Single = () => {
	const [back] = useAtom(backConfirmAtom);
	const [tutor] = useAtom(tutorGameAtom);
	const [cam] = useAtom(webCamAtom);
	const [games, setGameData] = useAtom(gamesAtom);
	const [user] = useAtom(anonUserAtom);
	const [accImg, setAccImg] = useAtom(accImgAtom);
	const [sysMoved, setSysMoved] = useAtom(sysMovedAtom);
	const [gameResult, setGameResult] = useAtom(gameResultAtom);
	const [result, setResult] = useAtom(resultAtom);

	const gameRound = games.find((game) => game?.userId === user?.uid);

	const P1Choise = gameRound?.choisePA;
	const P2Choise = gameRound?.choisePB;
	const P1Score = gameRound?.scorePA;
	const P2Score = gameRound?.scorePB;

	const systemChoise = useCallback(async () => {
		if (accImg) {
			await addSystemChoise(gameRound, user);
			setGameData(await getAllGame());
			setAccImg(false);
			setSysMoved(true);
		}
	}, [accImg]); // eslint-disable-line

	const Scoring = useCallback(async () => {
		if (sysMoved) {
			const result = Score(P1Choise, P2Choise);
			setGameResult(result);
			setSysMoved(false);
			setResult(true);
		}
	}, [sysMoved]); // eslint-disable-line

	useEffect(() => {
		systemChoise();
		Scoring();
	}, [systemChoise, Scoring]);

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

			{result && <ResultModal result={gameResult} />}
			{back && <BackModal />}
			{tutor && <TutorialModal />}
			{cam && <WebCamModal />}
		</div>
	);
};

export default Single;
