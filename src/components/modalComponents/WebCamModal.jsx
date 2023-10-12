import { useAtom } from 'jotai';
import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { webCamAtom } from '../../libs/atoms';
import TitlePage from '../smallComponents/TitlePage';

const WebCamModal = () => {
	const FACING_MODE_USER = 'user';
	const FACING_MODE_ENVIRONMENT = 'environment';
	const videoConstraints = {
		// width: 1280,
		// height: 720,
		facingMode: FACING_MODE_ENVIRONMENT,
	};

	const webCamRef = useRef(null);

	const [cam, setCam] = useAtom(webCamAtom);

	const [img, setImg] = useState(null);
	const [facingMode, setFacingMode] = useState(FACING_MODE_USER);

	const capture = useCallback(() => {
		const imageSrc = webCamRef.current.getScreenshot();
		setImg(imageSrc);
	}, [webCamRef, setImg]);

	const switchCamera = useCallback(() => {
		setFacingMode((prevState) =>
			prevState === FACING_MODE_USER
				? FACING_MODE_ENVIRONMENT
				: FACING_MODE_USER
		);
	}, []);

	const handleBack = () => {
		setCam(!cam);
	};

	const handleDetect = () => {
		capture();
	};

	const handleChangeCam = () => {
		switchCamera();
		console.log('Change camera to : ', facingMode);
	};

	return (
		<div className=" absolute flex h-full w-full flex-col items-center justify-around gap-5 backdrop-blur-sm">
			<TitlePage titleText="Hompimpah" />

			<div className=" mx-auto w-full">
				<div className=" mx-auto flex h-[30rem] max-h-[30rem] w-3/4 flex-col justify-between gap-4 overflow-y-auto rounded-md bg-slate-500 p-6 shadow-lg">
					<Webcam
						ref={webCamRef}
						audio={false}
						height={1280}
						screenshotFormat="image/jpeg"
						width={720}
						videoConstraints={{
							...videoConstraints,
							facingMode,
						}}
						className=" w-full rounded-md bg-slate-700"
					/>

					<div className=" w-full p-6">
						{img && (
							<div className=" mx-auto w-10/12">
								<img src={img} className=" h-full w-full" />
								<p>Result : Paper</p>
								<button
									onClick={handleBack}
									className=" mx-auto w-1/2 bg-slate-600 p-2"
								>
									Accept
								</button>
							</div>
						)}
					</div>
				</div>
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
