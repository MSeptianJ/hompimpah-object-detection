import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useCallback, useRef } from 'react';
import FetchImgDetection from '../../../scripts/FetchImgDetection';
import {
	camModeAtom,
	detDataAtom,
	screenShotAtom,
	imgAccAtom,
	webCamAtom,
} from '../../../libs/atoms';
import TitlePage from '../../smallComponents/TitlePage';
import WebCamButton from './WebCamButton';
import WebCamDetect from './WebCamDetect';

const WebCamModal = () => {
	// Modal
	const setCamModal = useSetAtom(webCamAtom);

	// Camera
	const setScreenShot = useSetAtom(screenShotAtom);
	const setFaceMode = useSetAtom(camModeAtom);

	// Detection
	const setDetection = useSetAtom(detDataAtom);

	// Game State
	const setImgAcc = useSetAtom(imgAccAtom);

	const webCamRef = useRef(null);

	const {
		mutate: detectThisImg,
		isLoading,
		isError,
		isSuccess,
	} = useMutation({
		mutationFn: FetchImgDetection,
		onSuccess: (data) => {
			setDetection(data);
		},
	});

	// Feature Functions
	const captureDetectImg = useCallback(() => {
		const imgScreenShot = webCamRef.current.getScreenshot();
		detectThisImg(imgScreenShot);
		setScreenShot(imgScreenShot);
	}, [webCamRef, setScreenShot, detectThisImg]);

	const switchCamera = useCallback(() => {
		setFaceMode((prevState) => (prevState === 'user' ? 'environment' : 'user'));
	}, [setFaceMode]);

	// Handle Functions for Button
	const handleBack = () => {
		setCamModal(false);
		setScreenShot(null);
		setDetection(null);
	};

	const handleDetect = () => {
		captureDetectImg();
	};

	const handleChangeCam = () => {
		switchCamera();
	};

	const handleRetry = () => {
		setScreenShot(null);
		setDetection(null);
	};

	const handleAccept = async () => {
		setCamModal(false);
		setScreenShot(null);
		setImgAcc(true);
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Hompimpah" />

			<div className=" row-span-4 w-full">
				<div className=" mx-auto aspect-square w-3/4 rounded-sm bg-slate-500 p-3 shadow-lg">
					<WebCamDetect
						camRef={webCamRef}
						handleBack={handleBack}
						isLoading={isLoading}
						isError={isError}
						isSuccess={isSuccess}
					/>
				</div>
			</div>

			<WebCamButton
				backBtn={handleBack}
				detectBtn={handleDetect}
				switchCamBtn={handleChangeCam}
				retryBtn={handleRetry}
				accBtn={handleAccept}
				isLoading={isLoading}
			/>
		</div>
	);
};

WebCamModal.propTypes = {};

export default WebCamModal;
