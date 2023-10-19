import { useAtom } from 'jotai';
import { backConfirmAtom, tutorGameAtom, webCamAtom } from '../../libs/atoms';
import BackModal from '../../components/modalComponents/BackModal';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import SingleContent from './components/SingleContent';
import TutorialModal from '../../components/modalComponents/TutorialModal';
import WebCamModal from '../../components/modalComponents/WebCamElement/WebCamModal';

const Single = () => {
	const [back] = useAtom(backConfirmAtom);
	const [tutor] = useAtom(tutorGameAtom);
	const [cam] = useAtom(webCamAtom);

	const P1Choise = 0;
	const P2Choise = 2;
	const P1Score = 0;
	const P2Score = 3;

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

			{back && <BackModal />}
			{tutor && <TutorialModal />}
			{cam && <WebCamModal />}
		</div>
	);
};

export default Single;
