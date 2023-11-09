import { useSetAtom } from 'jotai';
import {
	backModalAtom,
	tutorModalAtom,
	webCamModalAtom,
} from '../../libs/atoms';
import BtnPrimary from './BtnPrimary';

const GameMenu = () => {
	const setBackModal = useSetAtom(backModalAtom);
	const setTutorModal = useSetAtom(tutorModalAtom);
	const setCamModal = useSetAtom(webCamModalAtom);

	const handleGoBack = () => {
		setBackModal(true);
	};

	const handleDisplayCam = () => {
		setCamModal(true);
	};

	const handleTutorial = () => {
		setTutorModal(true);
	};

	return (
		<div className=" mx-auto grid w-full max-w-md grid-cols-3 gap-4 px-4 text-center">
			<BtnPrimary
				btnText="Exit"
				btnFunction={handleGoBack}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
			<BtnPrimary
				btnText="Camera"
				btnFunction={handleDisplayCam}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
			<BtnPrimary
				btnText="Tutorial"
				btnFunction={handleTutorial}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
		</div>
	);
};

GameMenu.propTypes = {};

export default GameMenu;
