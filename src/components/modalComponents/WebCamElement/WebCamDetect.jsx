import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import Webcam from 'react-webcam';
import { camModeAtom, detImgAtom } from '../../../libs/atoms';

const WebCamDetect = ({ camRef, handleBack }) => {
	const [img] = useAtom(detImgAtom);
	const [facingMode] = useAtom(camModeAtom);

	return (
		<div>
			<div className=" w-full rounded-md bg-slate-700">
				<Webcam
					ref={camRef}
					audio={false}
					screenshotFormat="image/jpeg"
					videoConstraints={{
						facingMode,
					}}
					className=" w-full rounded-md bg-slate-700"
				/>
			</div>

			<div className=" w-full p-6">
				{img && (
					<div className=" mx-auto w-10/12">
						<div>
							<img src={img} className=" h-full w-full" />
						</div>

						{/* {isLoading && <p>Detecting Image...</p>}
								<p>
									Image Size ={' '}
									{`${data?.image?.width} x ${data?.image?.height}`}
								</p>
								{data?.predictions[0]?.class || 'Nothing detected'} */}
						<button
							onClick={handleBack}
							className=" mx-auto w-1/2 bg-slate-600 p-2"
						>
							Accept
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

WebCamDetect.propTypes = {
	camRef: PropTypes.object,
	handleBack: PropTypes.func,
};

export default WebCamDetect;
