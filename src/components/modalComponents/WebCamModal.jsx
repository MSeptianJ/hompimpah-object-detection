import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import LOADICON from '../../assets/img/loading.svg';
import {
	checkingModelAtom,
	detectDataAtom,
	imgAccStateAtom,
	webCamModalAtom,
} from '../../libs/atoms';
import drawBoundingBox from '../../scripts/drawBoundingBox';
import { playCameraSound } from '../../scripts/sound';
import wait from '../../scripts/wait';
import Choices from '../featureComponents/Choices';
import Boxes from '../smallComponents/Boxes';
import TitlePage from '../smallComponents/TitlePage';

const WebCamModal = () => {
	// Local State
	const vites = import.meta.env;
	const TIME = 5;
	const TIMEMS = 5000;
	const [isCamReady, setIsCamReady] = useState(false);
	const [isCamDetecting, setIsCamDetecting] = useState(false);
	const [timer, setTimer] = useState(TIME);

	// Atom State
	const setImgAccState = useSetAtom(imgAccStateAtom);
	const [detection, setDetection] = useAtom(detectDataAtom);
	const [checkingModel, setCheckingModel] = useAtom(checkingModelAtom);

	// Modal
	const setCamModal = useSetAtom(webCamModalAtom);

	// Ref
	const webCamRef = useRef(null);
	const canvasRef = useRef(null);

	// Camera
	const checkCamActive = (camData) => {
		camData ? setIsCamReady(true) : setIsCamReady(false);
	};
	const videoConstraints = {
		aspectRatio: 1,
		facingMode: 'user',
	};

	const lastDetected = (detection) => {
		if (!detection?.length) {
			return 'Not detected';
		}

		const maxConf = detection.reduce((prev, current) =>
			prev && prev.confidence > current.confidence ? prev : current
		);

		const playerChoise = maxConf.class;
		return playerChoise;
	};

	const textCondition = () => {
		if (!isCamReady && !checkingModel) {
			return 'Loading';
		} else if (isCamReady && !checkingModel) {
			return 'Show Your Hands';
		} else if (checkingModel) {
			return 'Preparation';
		}
	};

	const getModel = async () => {
		const model = await window.roboflow
			.auth({
				publishable_key: vites.VITE_RBF_PUBLICKEY,
			})
			.load({
				model: vites.VITE_RBF_MODEL,
				version: vites.VITE_RBF_VERSION,
			});

		model.configure({
			threshold: 0.5,
			max_objects: 2,
		});

		return model;
	};

	const doDetection = async (model) => {
		if (
			typeof webCamRef.current !== 'undefined' &&
			webCamRef.current !== null &&
			webCamRef.current.video.readyState === 4
		) {
			const video = webCamRef.current.video;
			const canvas = canvasRef.current;

			const videoWidth = video.videoWidth;
			const videoHeight = video.videoHeight;

			video.width = videoWidth;
			video.height = videoHeight;
			canvas.width = videoWidth;
			canvas.height = videoHeight;

			await model.detect(video).then((prediction) => {
				if (prediction?.length) {
					setDetection(prediction);
					drawBoundingBox(prediction, canvasRef);
				}
			});
		}
	};

	const StartDetection = useCallback(async () => {
		if (isCamReady) {
			setIsCamDetecting(true);

			const model = getModel();

			model.then(async (model) => {
				const detectingInterval = setInterval(() => {
					doDetection(model);
				}, 100);

				await wait(TIMEMS);

				clearInterval(detectingInterval);
				// model.teardown();
			});
		}
	}, [isCamReady]); // eslint-disable-line

	const TimerDetection = useCallback(async () => {
		if (isCamDetecting) {
			const timerInterval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);

			await wait(TIMEMS);

			setIsCamDetecting(false);
			setIsCamReady(false);
			setCamModal(false);

			clearInterval(timerInterval);

			if (!checkingModel) {
				playCameraSound();
				setImgAccState(true);
			} else {
				setCheckingModel(false);
			}
		}
	}, [isCamDetecting]); // eslint-disable-line

	useEffect(() => {
		StartDetection();
		TimerDetection();
	}, [TimerDetection, StartDetection]);

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-backColor">
			<Boxes />
			<TitlePage titleText={textCondition()} accentText={String(timer)} isCol />

			<div className=" z-0 row-span-3 mx-auto grid w-3/4 gap-4 overflow-y-auto rounded-[4px] bg-primaryColor p-6 px-5 text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)]">
				<div className="relative mx-auto aspect-square h-full w-full">
					{!isCamReady && !checkingModel && (
						<div className=" absolute top-0 grid aspect-square h-full w-full justify-items-center text-white">
							<img src={LOADICON} alt="Loading Icon" className=" m-auto w-32" />
						</div>
					)}

					{checkingModel && (
						<div className=" absolute top-0 grid aspect-square h-full w-full justify-items-center bg-secondaryColor bg-opacity-30 text-white">
							<img src={LOADICON} alt="Loading Icon" className=" m-auto w-32" />
						</div>
					)}

					<canvas
						className=" absolute top-0 m-auto h-full w-full"
						ref={canvasRef}
					/>

					<Webcam
						ref={webCamRef}
						audio={false}
						screenshotFormat="image/jpeg"
						videoConstraints={videoConstraints}
						onUserMedia={checkCamActive}
						className=" h-full w-full rounded-[4px]"
						muted
					/>
				</div>
			</div>

			{!checkingModel && (
				<div className="z-0 row-span-2 m-auto flex w-2/5 flex-col items-center justify-center rounded-[4px] bg-primaryColor px-3 py-5 text-center text-white shadow-lg shadow-[rbga(0,0,0,0.3)]">
					<Choices choice={lastDetected(detection)} isDetecting />
				</div>
			)}
		</div>
	);
};

WebCamModal.propTypes = {};

export default WebCamModal;
