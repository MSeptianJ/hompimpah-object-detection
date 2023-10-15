import { useAtom } from 'jotai';
import { backConfirmAtom, tutorGameAtom, webCamAtom } from '../../libs/atoms';

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
			<button
				onClick={handleGoBack}
				className=" w-full cursor-pointer rounded-sm bg-slate-300 p-4 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Exit
			</button>
			<button
				onClick={handleDisplayCam}
				className=" w-full cursor-pointer rounded-sm bg-slate-300 p-4 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Camera
			</button>
			<button
				onClick={handleTutorial}
				className=" w-full cursor-pointer rounded-sm bg-slate-300 p-4 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Tutorial
			</button>
		</div>
	);
};

GameMenu.propTypes = {};

export default GameMenu;
