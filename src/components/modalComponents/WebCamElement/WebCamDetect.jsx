import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { camModeAtom, detDataAtom, detImgAtom } from '../../../libs/atoms';

const WebCamDetect = ({
	camRef,
	handleBack,
	isLoading,
	isError,
	isSuccess,
}) => {
	const videoConstraints = {
		width: { min: 480 },
		height: { min: 720 },
		aspectRatio: 0.6666666667,
	};

	const [img, setImg] = useAtom(detImgAtom);
	const [facingMode] = useAtom(camModeAtom);
	const [detection] = useAtom(detDataAtom);

	const handleRetryDetect = () => {
		setImg(null);
	};

	return (
		<>
			{img ? (
				<div className=" mx-auto w-full">
					<div className=" w-full">
						<img src={img} className=" h-full w-full" />
					</div>

					{isLoading && <p>Detecting Image...</p>}

					{isError && <p>There is an Error</p>}

					{isSuccess && (
						<>
							<p>{detection?.predictions[0]?.class || 'Nothing detected'}</p>
							<p>
								{`
								Width : ${detection?.image?.width} Heigth :${detection?.image?.height}
								`}
							</p>
						</>
					)}

					<div className=" grid w-full grid-cols-2 gap-4">
						<button
							onClick={handleBack}
							className=" mx-auto w-full bg-slate-600 p-2"
						>
							Accept
						</button>
						<button
							onClick={handleRetryDetect}
							className=" mx-auto w-full bg-slate-600 p-2"
						>
							Retry
						</button>
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
					className=" h-full w-full rounded-md bg-slate-700"
				/>
			)}
		</>
	);
};

WebCamDetect.propTypes = {
	camRef: PropTypes.object,
	handleBack: PropTypes.func,
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	isSuccess: PropTypes.bool,
};

export default WebCamDetect;
