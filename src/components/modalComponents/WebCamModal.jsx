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
import wait from '../../scripts/wait';
import Choices from '../featureComponents/Choices';
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
				model.teardown();
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
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Rock Paper Scissors" />

			<div className=" row-span-3 w-full px-5">
				<div className=" mx-auto h-full w-full rounded-sm bg-slate-500 p-3 shadow-lg lg:w-3/5">
					<div className="relative mx-auto aspect-square h-full w-full">
						{!isCamReady && !checkingModel && (
							<div className=" absolute top-0 w-full bg-yellow-600 bg-opacity-50 text-lg text-white">
								<p>Loading</p>
								<img
									src={LOADICON}
									alt="Loading Icon"
									className=" mx-auto w-20"
								/>
							</div>
						)}

						{isCamDetecting && !checkingModel && (
							<div className=" absolute top-0 w-full bg-green-600 bg-opacity-70 text-center text-lg text-white">
								<p>Show Your Hands</p>
								<p>{timer}</p>
							</div>
						)}

						{checkingModel && (
							<div className=" absolute top-0 h-full w-full bg-slate-600 bg-opacity-50 text-white">
								<p className=" text-lg">Starting Detection Model</p>
								<img
									src={LOADICON}
									alt="Loading Icon"
									className=" m-auto w-32"
								/>
								<p className=" text-lg">{timer}</p>
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
							className=" h-full w-full rounded-sm bg-slate-700"
							muted
						/>
					</div>
				</div>
			</div>

			<div className=" relative row-span-2 grid w-full justify-items-center text-white">
				{checkingModel ? (
					''
				) : (
					<>
						<Choices choice={lastDetected(detection)} isDetecting />
					</>
				)}
			</div>
		</div>
	);
};

WebCamModal.propTypes = {};

export default WebCamModal;
