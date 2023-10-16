import { useAtom } from 'jotai';
import { backConfirmAtom, tutorGameAtom, webCamAtom } from '../../libs/atoms';
import BtnPrimary from './BtnPrimary';

const GameMenu = () => {
	const [back, setBack] = useAtom(backConfirmAtom);
	const [tutor, setTutor] = useAtom(tutorGameAtom);
	const [cam, setCam] = useAtom(webCamAtom);

	const handleGoBack = () => {
		setBack(!back);
	};

	const handleDisplayCam = () => {
		setCam(!cam);
	};

	const handleTutorial = () => {
		setTutor(!tutor);
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
