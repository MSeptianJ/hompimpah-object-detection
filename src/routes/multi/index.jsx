import { useAtom } from 'jotai';
import {
	backModalAtom,
	tutorModalAtom,
	webCamModalAtom,
} from '../../libs/atoms';
import BackModal from '../../components/modalComponents/BackModal';
import GameMenu from '../../components/smallComponents/GameMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import MultiContent from './components/MultiContent';
import TutorialModal from '../../components/modalComponents/TutorialModal';
import WebCamModal from '../../components/modalComponents/WebCamElement/WebCamModal';

const Multi = () => {
	const [backModal] = useAtom(backModalAtom);
	const [tutorModal] = useAtom(tutorModalAtom);
	const [camModal] = useAtom(webCamModalAtom);

	const P1Choise = 2;
	const P2Choise = 1;
	const P1Score = 1;
	const P2Score = 2;

	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="Multi Player" />

			<div className=" row-span-4 h-full w-full">
				<div className=" mx-auto grid h-full w-2/3 grid-rows-2 items-center gap-3 overflow-y-auto rounded-sm bg-slate-300 p-6 shadow-lg">
					<MultiContent
						P1Choise={P1Choise}
						P1Score={P1Score}
						P2Choise={P2Choise}
						P2Score={P2Score}
					/>
				</div>
			</div>

			<GameMenu />

			{backModal && <BackModal />}
			{tutorModal && <TutorialModal />}
			{camModal && <WebCamModal />}
		</div>
	);
};

export default Multi;
