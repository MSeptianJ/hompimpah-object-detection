import { useAtom } from 'jotai';
import { webCamAtom } from '../../libs/atoms';
import TitlePage from '../smallComponents/TitlePage';

const WebCamModal = () => {
	const [cam, setCam] = useAtom(webCamAtom);

	const handleBack = () => {
		setCam(!cam);
	};

	const handleDetect = () => {
		console.log('detecting');
	};

	const handleChangeCam = () => {
		console.log('change Cam');
	};

	return (
		<div className=" absolute flex h-full w-full flex-col items-center justify-around gap-5 backdrop-blur-sm">
			<TitlePage titleText="Hompimpah" />

			<div className=" mx-auto w-full">
				<div className=" mx-auto h-[30rem] max-h-[30rem] w-3/4 gap-4 rounded-md bg-slate-500 p-6 shadow-lg"></div>
			</div>

			<div className=" mx-auto flex w-full  max-w-md items-center justify-around text-center">
				<button
					className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
					onClick={handleBack}
				>
					Back
				</button>
				<button
					className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
					onClick={handleDetect}
				>
					Detect
				</button>
				<button
					className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
					onClick={handleChangeCam}
				>
					Change Camera
				</button>
			</div>
		</div>
	);
};

WebCamModal.propTypes = {};

export default WebCamModal;
