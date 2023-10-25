import { useMutation } from '@tanstack/react-query';
import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useRef } from 'react';
import { detectImg } from '../../../libs/apiCalls';
import {
	camModeAtom,
	detDataAtom,
	detImgAtom,
	gameRoundAtom,
	webCamAtom,
} from '../../../libs/atoms';
import TitlePage from '../../smallComponents/TitlePage';
import WebCamButton from './WebCamButton';
import WebCamDetect from './WebCamDetect';
import { addGameRound, getAllGame } from '../../../libs/firebase/FirebaseDB';
import useGetUser from '../../../hooks/useGetUser';

const WebCamModal = () => {
	const [cam, setCam] = useAtom(webCamAtom);
	const setImg = useSetAtom(detImgAtom);
	const setFaceMode = useSetAtom(camModeAtom);
	const [detData, setDetData] = useAtom(detDataAtom);
	const setGameData = useSetAtom(gameRoundAtom);
	const userData = useGetUser();
	const webCamRef = useRef(null);

	const { mutate, isLoading, isError, isSuccess } = useMutation({
		mutationFn: detectImg,
		onSuccess: (data) => {
			setDetData(data);
		},
	});

	// Feature Functions
	const captureDetectImg = useCallback(() => {
		const imageSrc = webCamRef.current.getScreenshot();
		mutate(imageSrc);
		setImg(imageSrc);
	}, [webCamRef, setImg, mutate]);

	const switchCamera = useCallback(() => {
		setFaceMode((prevState) => (prevState === 'user' ? 'environment' : 'user'));
	}, [setFaceMode]);

	// Handle Functions for Button
	const handleBack = () => {
		setCam(!cam);
		setImg(null);
		setDetData(null);
	};

	const handleDetect = () => {
		captureDetectImg();
	};

	const handleChangeCam = () => {
		switchCamera();
	};

	const handleRetry = () => {
		setImg(null);
		setDetData(null);
	};

	const handleAccept = async () => {
		addGameRound(userData, detData);
		setCam(!cam);
		setImg(null);
		setDetData(null);
		setGameData(await getAllGame());
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
