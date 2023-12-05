import { useAtom, useSetAtom } from 'jotai';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import LOADICON from '../../../assets/img/loading.svg';
import {
	camModeAtom,
	detectDataAtom,
	imgAccStateAtom,
	isCamActiveAtom,
	webCamModalAtom,
} from '../../../libs/atoms';
import { drawBoundingBox } from '../../../scripts/drawBoundingBox';
import wait from '../../../scripts/wait';
import TitlePage from '../../smallComponents/TitlePage';

const WebCamRealTime = () => {
	const TIME = {
		seconds: 10,
		ms: 10000,
	};
	const vites = import.meta.env;

	// State
	const [isCamReady, setIsCamReady] = useAtom(isCamActiveAtom);
	const [isCamDetecting, setIsCamDetecting] = useState(false);
	const setImgAccState = useSetAtom(imgAccStateAtom);
	const [timer, setTimer] = useState(TIME.seconds);

	// Camera
	const [facingMode] = useAtom(camModeAtom);

	// Modal
	const setCamModal = useSetAtom(webCamModalAtom);

	// Detection
	const [detection, setDetection] = useAtom(detectDataAtom);

	// Ref
	const webCamRef = useRef(null);
	const canvasRef = useRef(null);

	// Camera Config
	const checkCamActive = (camData) => {
		console.count('change Camera State');
		camData ? setIsCamReady(true) : setIsCamReady(false);
	};

	const videoConstraints = {
		aspectRatio: 1,
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
				model: 'rockpaperscissors-t0zfu',
				version: '10',
			});

		model.configure({
			threshold: 0.5,
			max_objects: 2,
		});

		return model;
	};

	const detect = async (model) => {
		if (
			typeof webCamRef.current !== 'undefined' &&
			webCamRef.current !== null &&
			webCamRef.current.video.readyState === 4
		) {
			const video = webCamRef.current.video;
			const videoWidth = video.videoWidth;
			const videoHeight = video.videoHeight;

			webCamRef.current.video.width = videoWidth;
			webCamRef.current.video.height = videoHeight;
			canvasRef.current.width = videoWidth;
			canvasRef.current.height = videoHeight;
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

			// video.addEventListener('loadeddata', async () => {
			model.then(async (model) => {
				const detectingInterval = setInterval(() => {
					detect(model);
				}, 10);

				await wait(TIME.ms);

				clearInterval(detectingInterval);
				model.teardown();
			});

			// });
		}
	}, [isCamReady]); // eslint-disable-line

	const TimerDetection = useCallback(async () => {
		if (isCamDetecting) {
			const timerInterval = setInterval(() => {
				setTimer((prev) => prev - 1);
			}, 1000);

			await wait(TIME.ms);

			// Clear State
			setIsCamDetecting(false);
			setIsCamReady(false);
			setCamModal(false);

			setImgAccState(true);

			clearInterval(timerInterval);
		}
	}, [isCamDetecting]); // eslint-disable-line

	useEffect(() => {
		StartDetection();
		TimerDetection();
	}, [TimerDetection, StartDetection]);

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Rock Paper Scissors" />

			<div className=" row-span-4 w-full px-5">
				<div className="  mx-auto h-full w-full rounded-sm bg-slate-500 p-3 shadow-lg">
					<div className="relative aspect-square h-full w-full">
						{!isCamReady && (
							<div className=" absolute top-0 w-full bg-yellow-600 text-sm opacity-50">
								<p>Loading</p>
								<img
									src={LOADICON}
									alt="Loading Icon"
									className=" mx-auto w-10"
								/>
							</div>
						)}

						{isCamDetecting && (
							<div className=" absolute top-0 w-full bg-red-600 opacity-50">
								<p>Show Your Hands</p>
							</div>
						)}

						<canvas
							className=" absolute top-0 m-auto h-full w-full"
							ref={canvasRef}
						></canvas>

						<Webcam
							ref={webCamRef}
							audio={false}
							screenshotFormat="image/jpeg"
							videoConstraints={{
								...videoConstraints,
								facingMode,
							}}
							muted
							onUserMedia={checkCamActive}
							className=" h-full w-full rounded-sm bg-slate-700"
						/>
					</div>
				</div>
			</div>

			<div>
				<p className=" text-center text-lg text-white">
					{lastDetected(detection)}
				</p>
				<p className=" text-center text-lg text-white">{timer}</p>
			</div>
		</div>
	);
};

WebCamRealTime.propTypes = {
	camRef: PropTypes.object,
};

export default WebCamRealTime;
