import PropTypes from 'prop-types';
import BtnPrimary from '../../smallComponents/BtnPrimary';
import { playCameraSound } from '../../../scripts/sound';
import { useAtom } from 'jotai';
import { detectDataAtom, screenShotAtom } from '../../../libs/atoms';

const WebCamButton = ({
	backBtn,
	detectBtn,
	switchCamBtn,
	retryBtn,
	accBtn,
	isLoading,
}) => {
	const [screenShot] = useAtom(screenShotAtom);
	const [detection] = useAtom(detectDataAtom);

	return (
		<div className=" mx-auto grid w-full max-w-md grid-cols-3 gap-4 px-4 text-center">
			<BtnPrimary
				btnText="Back"
				btnFunction={backBtn}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>

			{screenShot ? (
				<>
					<BtnPrimary
						btnDisabled={isLoading ? true : false}
						btnText="Retry"
						btnFunction={retryBtn}
						btnStyles={
							isLoading
								? 'bg-slate-400 hover:bg-slate-600'
								: 'bg-blue-400 hover:bg-blue-600'
						}
					/>
					<BtnPrimary
						btnDisabled={detection?.predictions.length ? false : true}
						btnText="Accept"
						btnFunction={accBtn}
						btnStyles={
							detection?.predictions.length
								? 'bg-green-400 hover:bg-green-600'
								: 'bg-slate-400 hover:bg-slate-600'
						}
					/>
				</>
			) : (
				<>
					<BtnPrimary
						btnText="Detect"
						btnFunction={detectBtn}
						btnSound={playCameraSound}
						btnStyles={'bg-slate-500 hover:bg-gray-700'}
					/>
					<BtnPrimary
						btnText="Switch"
						btnFunction={switchCamBtn}
						btnStyles={'bg-slate-500 hover:bg-gray-700'}
					/>
				</>
			)}
		</div>
	);
};

WebCamButton.propTypes = {
	backBtn: PropTypes.func,
	detectBtn: PropTypes.func,
	switchCamBtn: PropTypes.func,
	retryBtn: PropTypes.func,
	accBtn: PropTypes.func,
	isLoading: PropTypes.bool,
};

export default WebCamButton;
