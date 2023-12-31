import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useRef } from 'react';
import {
	camModeAtom,
	detectDataAtom,
	imgAccStateAtom,
	isCamActiveAtom,
	screenShotAtom,
	webCamModalAtom,
} from '../../libs/atoms';
import FetchImgDetection from '../FetchImgDetection';
import TitlePage from '../../components/smallComponents/TitlePage';
import WebCamButton from './WebCamButton';
import WebCamDetect from './WebCamDetect';

const WebCamModal = () => {
	// Modal
	const setCamModal = useSetAtom(webCamModalAtom);

	// Camera
	const setScreenShot = useSetAtom(screenShotAtom);
	const setFaceMode = useSetAtom(camModeAtom);
	const setIsCamActive = useSetAtom(isCamActiveAtom);

	// Detection
	const setDetection = useSetAtom(detectDataAtom);

	// Game State
	const setImgAccState = useSetAtom(imgAccStateAtom);

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

	// Handle Functions for Button
	const handleBack = () => {
		setCamModal(false);

		setScreenShot(null);
		setDetection(null);
		setIsCamActive(false);
	};

	const handleDetect = () => {
		const imgScreenShot = webCamRef.current.getScreenshot();
		detectThisImg(imgScreenShot);

		setScreenShot(imgScreenShot);
		setIsCamActive(false);
	};

	const handleChangeCam = () => {
		setFaceMode((prevState) => (prevState === 'user' ? 'environment' : 'user'));
	};

	const handleRetry = () => {
		setScreenShot(null);
		setDetection(null);
	};

	const handleAccept = async () => {
		setCamModal(false);

		setScreenShot(null);

		setImgAccState(true);
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Rock Paper Scissors" />

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
