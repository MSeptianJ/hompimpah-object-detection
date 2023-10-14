import { useAtom } from 'jotai';
import { backConfirmAtom, tutorGameAtom, webCamAtom } from '../../libs/atoms';
import BackConfirmation from '../../components/modalComponents/BackModal';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import MultiContent from './components/MultiContent';
import TutorGame from '../../components/modalComponents/TutorialModal';
import WebCamModal from '../../components/modalComponents/WebCamElement/WebCamModal';

const Multi = () => {
	const [back] = useAtom(backConfirmAtom);
	const [tutor] = useAtom(tutorGameAtom);
	const [cam] = useAtom(webCamAtom);

	const P1Choise = 2;
	const P2Choise = 1;
	const P1Score = 1;
	const P2Score = 2;

	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col items-center justify-around text-center">
			<TitlePage titleText="Multi Player" />

			<div className=" mx-auto w-full">
				<div className=" m-auto max-h-[30rem] w-2/3 gap-4 rounded-md bg-slate-300 p-6">
					<MultiContent
						P1Choise={P1Choise}
						P1Score={P1Score}
						P2Choise={P2Choise}
						P2Score={P2Score}
					/>
				</div>
			</div>

			<GameMenu />

			{back && <BackConfirmation />}
			{tutor && <TutorGame />}
			{cam && <WebCamModal />}
		</div>
	);
};

export default Multi;
