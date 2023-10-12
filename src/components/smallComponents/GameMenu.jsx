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
		<div className=" mx-auto flex w-full max-w-md items-center justify-around text-center">
			<button
				onClick={handleGoBack}
				className=" block w-1/5 cursor-pointer rounded-md bg-slate-300 p-3 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Exit
			</button>
			<button
				onClick={handleDisplayCam}
				className=" block w-1/5 cursor-pointer rounded-md bg-slate-300 p-3 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Camera
			</button>
			<button
				onClick={handleTutorial}
				className=" block w-1/5 cursor-pointer rounded-md bg-slate-300 p-3 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Tutorial
			</button>
		</div>
	);
};

GameMenu.propTypes = {};

export default GameMenu;
