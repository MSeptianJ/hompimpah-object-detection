import { useAtom, useSetAtom } from 'jotai';
import { useCallback, useRef } from 'react';
import { camModeAtom, detImgAtom, webCamAtom } from '../../../libs/atoms';
import TitlePage from '../../smallComponents/TitlePage';
import WebCamButton from './WebCamButton';
import WebCamDetect from './WebCamDetect';

const WebCamModal = () => {
	const [cam, setCam] = useAtom(webCamAtom);
	const setImg = useSetAtom(detImgAtom);
	const setFaceMode = useSetAtom(camModeAtom);
	const webCamRef = useRef(null);

	// Feature Functions
	const captureDetectImg = useCallback(() => {
		const imageSrc = webCamRef.current.getScreenshot();
		setImg(imageSrc);
	}, [webCamRef, setImg]);

	const switchCamera = useCallback(() => {
		setFaceMode((prevState) =>
			prevState === 'user' ? 'environtment' : 'user'
		);
	}, [setFaceMode]);

	// Handle Functions for Button
	const handleBack = () => {
		setCam(!cam);
		setImg(null);
	};

	const handleDetect = () => {
		captureDetectImg();
	};

	const handleChangeCam = () => {
		switchCamera();
	};

	return (
		<div className=" absolute flex h-full w-full flex-col items-center justify-around gap-5 backdrop-blur-sm">
			<TitlePage titleText="Hompimpah" />

			<div className=" mx-auto w-full">
				<div className=" mx-auto flex h-[30rem] max-h-[30rem] w-3/4 flex-col justify-between gap-4 overflow-y-auto rounded-md bg-slate-500 p-6 shadow-lg">
					<WebCamDetect camRef={webCamRef} handleBack={handleBack} />
				</div>
			</div>

			<WebCamButton
				handleBack={handleBack}
				handleDetect={handleDetect}
				handleChangeCam={handleChangeCam}
			/>
		</div>
	);
};

WebCamModal.propTypes = {};

export default WebCamModal;
