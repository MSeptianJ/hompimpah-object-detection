import { useSetAtom } from 'jotai';
import {
	backModalAtom,
	detectDataAtom,
	tutorModalAtom,
	webCamModalAtom,
} from '../../libs/atoms';
import { CameraIcon, GoBackIcon, TutorialIcon } from '../../libs/icons';
import BtnPrimary from './BtnPrimary';

const BtnGameMenu = () => {
	const setBackModal = useSetAtom(backModalAtom);
	const setTutorModal = useSetAtom(tutorModalAtom);
	const setCamModal = useSetAtom(webCamModalAtom);
	const setDetection = useSetAtom(detectDataAtom);

	const handleGoBack = () => {
		setBackModal(true);
	};

	const handleDisplayCam = () => {
		setCamModal(true);
		setDetection(null);
	};

	const handleTutorial = () => {
		setTutorModal(true);
	};

	return (
		<div className=" mx-auto grid w-full max-w-md grid-cols-3 gap-4 px-4 text-center">
			<BtnPrimary
				btnIcon={<GoBackIcon cls=" w-full text-lg scale-150" />}
				btnFunction={handleGoBack}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
			<BtnPrimary
				btnIcon={<CameraIcon cls=" w-full text-lg scale-150" />}
				btnFunction={handleDisplayCam}
				btnStyles="bg-green-400 hover:bg-green-500"
			/>
			<BtnPrimary
				btnIcon={<TutorialIcon cls=" w-full text-lg scale-150" />}
				btnFunction={handleTutorial}
				btnStyles="bg-blue-400 hover:bg-blue-500 animate-bounce"
			/>
		</div>
	);
};

BtnGameMenu.propTypes = {};

export default BtnGameMenu;
