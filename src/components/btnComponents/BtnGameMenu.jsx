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
		<div className="z-0 mx-auto grid w-full max-w-md grid-cols-3 gap-5 px-4 text-center">
			<div className="group m-auto w-full rounded-[4px] bg-primaryColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-accentColor ">
				<BtnPrimary
					btnText="Menu"
					btnFunction={handleGoBack}
					btnStyles=" w-full p-3 flex flex-col items-center transition-colors duration-300 group-hover:text-primaryColor"
					btnIcon={
						<GoBackIcon className=" h-6 w-6 transition-colors duration-300 group-hover:text-primaryColor" />
					}
				/>
			</div>

			<div className="group m-auto w-full rounded-[4px] bg-accentColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300">
				<BtnPrimary
					btnText="Camera"
					btnFunction={handleDisplayCam}
					btnStyles=" w-full p-3 flex flex-col items-center justify-center transition-colors duration-300 group-hover:text-primaryColor"
					btnIcon={
						<CameraIcon className=" h-6 w-6 transition-colors duration-300 group-hover:text-primaryColor" />
					}
				/>
			</div>

			<div className="group m-auto w-full rounded-[4px] bg-primaryColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-accentColor ">
				<BtnPrimary
					btnText="Tutorial"
					btnFunction={handleTutorial}
					btnStyles=" w-full p-3 flex flex-col items-center transition-colors duration-300 group-hover:text-primaryColor"
					btnIcon={
						<TutorialIcon className=" h-6 w-6 transition-colors duration-300 group-hover:text-primaryColor" />
					}
				/>
			</div>
		</div>
	);
};

BtnGameMenu.propTypes = {};

export default BtnGameMenu;
