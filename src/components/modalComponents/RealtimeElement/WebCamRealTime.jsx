import { useAtom, useSetAtom } from 'jotai';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import LOADICON from '../../../assets/img/loading.svg';
import {
	detectDataAtom,
	imgAccStateAtom,
	webCamModalAtom,
} from '../../../libs/atoms';
import { drawBoundingBox } from '../../../scripts/drawBoundingBox';
import wait from '../../../scripts/wait';
import TitlePage from '../../smallComponents/TitlePage';

const WebCamRealTime = () => {
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
				}, 10);

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
							<div className=" absolute top-0 w-full bg-yellow-600 bg-opacity-50">
								<p>Loading</p>
								<img
									src={LOADICON}
									alt="Loading Icon"
									className=" mx-auto w-10"
								/>
							</div>
						)}

						{isCamDetecting && (
							<div className=" absolute top-0 w-full bg-red-600 bg-opacity-50">
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
							videoConstraints={videoConstraints}
							onUserMedia={checkCamActive}
							className=" h-full w-full rounded-sm bg-slate-700"
							muted
						/>
					</div>
				</div>
			</div>

			<div>
				<p className=" text-center text-lg text-white">
					Detected : {lastDetected(detection)}
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
