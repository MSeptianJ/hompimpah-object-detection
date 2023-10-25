import { useAtom } from 'jotai';
import BackModal from '../../components/modalComponents/BackModal';
import TutorialModal from '../../components/modalComponents/TutorialModal';
import WebCamModal from '../../components/modalComponents/WebCamElement/WebCamModal';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import {
	anonUserAtom,
	backConfirmAtom,
	gameRoundAtom,
	tutorGameAtom,
	webCamAtom,
} from '../../libs/atoms';
import SingleContent from './components/SingleContent';

const Single = () => {
	const [back] = useAtom(backConfirmAtom);
	const [tutor] = useAtom(tutorGameAtom);
	const [cam] = useAtom(webCamAtom);
	const [games] = useAtom(gameRoundAtom);
	const [user] = useAtom(anonUserAtom);

	const gameRound = games.find((game) => game?.userId === user?.uid);

	const P1Choise = gameRound?.choisePA;
	const P2Choise = gameRound?.choisePB;
	const P1Score = gameRound?.scorePA;
	const P2Score = gameRound?.scorePB;

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
						gameRound={gameRound}
						userData={user}
					/>
				</div>
			</div>

			<GameMenu />

			{back && <BackModal />}
			{tutor && <TutorialModal />}
			{cam && <WebCamModal />}
		</div>
	);
};

export default Single;
