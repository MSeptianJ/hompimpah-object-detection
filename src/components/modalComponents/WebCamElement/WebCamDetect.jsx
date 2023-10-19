import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { camModeAtom, detDataAtom, detImgAtom } from '../../../libs/atoms';
import CanvasRect from '../../featureComponents/CanvasRect';

const WebCamDetect = ({ camRef, isLoading, isError, isSuccess }) => {
	const videoConstraints = {
		width: { min: 480 },
		height: { min: 720 },
		aspectRatio: 1,
	};

	const [img] = useAtom(detImgAtom);
	const [detection] = useAtom(detDataAtom);
	const [facingMode] = useAtom(camModeAtom);

	return (
		<>
			{img ? (
				<div className=" relative h-full w-full rounded-sm bg-slate-700">
					<CanvasRect isSuccess={isSuccess} />
					<img src={img} className=" aspect-square h-full w-full" />

					<div className=" absolute top-0 mx-auto w-full ">
						{isLoading && (
							<p className=" mx-auto w-full bg-yellow-500 bg-opacity-50">
								Detecting Image...
							</p>
						)}

						{isError && (
							<p className=" mx-auto w-full bg-red-500 bg-opacity-50">
								There is an Error
							</p>
						)}

						{isSuccess && (
							<p className=" mx-auto w-full bg-slate-500 bg-opacity-50">
								{!detection?.predictions.length ? 'Nothing detected' : null}
							</p>
						)}
					</div>
				</div>
			) : (
				<Webcam
					ref={camRef}
					audio={false}
					screenshotFormat="image/jpeg"
					videoConstraints={{
						...videoConstraints,
						facingMode,
					}}
					className=" h-full w-full rounded-sm bg-slate-700"
				/>
			)}
		</>
	);
};

WebCamDetect.propTypes = {
	camRef: PropTypes.object,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	isSuccess: PropTypes.bool,
};

export default WebCamDetect;
