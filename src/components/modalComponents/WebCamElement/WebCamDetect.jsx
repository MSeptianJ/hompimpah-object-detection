import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { camModeAtom, detDataAtom, detImgAtom } from '../../../libs/atoms';

const WebCamDetect = ({ camRef, isLoading, isError, isSuccess }) => {
	const videoConstraints = {
		// width: { min: 480 },
		// height: { min: 720 },
		aspectRatio: 1,
	};

	const [img] = useAtom(detImgAtom);
	const [facingMode] = useAtom(camModeAtom);
	const [detection] = useAtom(detDataAtom);

	return (
		<>
			{img ? (
				<div className=" relative h-full w-full rounded-sm bg-slate-700">
					<img src={img} className=" h-full w-full object-contain" />

					<div className=" absolute top-0 mx-auto w-full bg-slate-500 bg-opacity-60">
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
	isLoading: PropTypes.bool,
	isError: PropTypes.bool,
	isSuccess: PropTypes.bool,
};

export default WebCamDetect;
