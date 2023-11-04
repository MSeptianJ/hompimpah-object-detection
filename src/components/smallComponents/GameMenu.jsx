import { useSetAtom } from 'jotai';
import { backConfirmAtom, tutorGameAtom, webCamAtom } from '../../libs/atoms';
import BtnPrimary from './BtnPrimary';

const GameMenu = () => {
	const setBack = useSetAtom(backConfirmAtom);
	const setTutor = useSetAtom(tutorGameAtom);
	const setCam = useSetAtom(webCamAtom);

	const handleGoBack = () => {
		setBack(true);
	};

	const handleDisplayCam = () => {
		setCam(true);
	};

	const handleTutorial = () => {
		setTutor(true);
	};

	return (
		<div className=" mx-auto grid w-full max-w-md grid-cols-3 gap-4 px-4 text-center">
			<BtnPrimary
				text="Exit"
				btnFunction={handleGoBack}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
			<BtnPrimary
				text="Camera"
				btnFunction={handleDisplayCam}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
			<BtnPrimary
				text="Tutorial"
				btnFunction={handleTutorial}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
		</div>
	);
};

GameMenu.propTypes = {};

export default GameMenu;
