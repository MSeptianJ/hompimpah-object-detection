import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { detectDataAtom, screenShotAtom } from '../../../libs/atoms';
import {
	AcceptIcon,
	CameraIcon,
	CameraSwitchIcon,
	GoBackIcon,
	RedoIcon,
} from '../../../libs/icons';
import { playCameraSound } from '../../../scripts/sound';
import BtnPrimary from '../../smallComponents/BtnPrimary';

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
				btnIcon={<GoBackIcon cls=" w-full text-lg scale-150 text-slate-800" />}
				btnTitle="Go Back"
				btnFunction={backBtn}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>

			{screenShot ? (
				<>
					<BtnPrimary
						btnDisabled={isLoading ? true : false}
						btnIcon={<RedoIcon cls="w-full text-lg scale-125 text-slate-800" />}
						btnTitle="Redo Detection"
						btnFunction={retryBtn}
						btnStyles={
							isLoading
								? 'bg-slate-500 hover:bg-slate-600'
								: 'bg-blue-400 hover:bg-blue-600'
						}
					/>
					<BtnPrimary
						btnDisabled={detection?.predictions.length ? false : true}
						btnIcon={
							<AcceptIcon cls="w-full text-lg scale-150 text-slate-800" />
						}
						btnTitle="Accept Detection"
						btnFunction={accBtn}
						btnStyles={
							detection?.predictions.length
								? 'bg-green-500 hover:bg-green-600'
								: 'bg-slate-500 hover:bg-slate-600'
						}
					/>
				</>
			) : (
				<>
					<BtnPrimary
						btnIcon={
							<CameraIcon cls=" w-full text-lg scale-150 text-slate-800" />
						}
						btnTitle="Start Detection"
						btnFunction={detectBtn}
						btnSound={playCameraSound}
						btnStyles={'bg-slate-500 hover:bg-gray-700'}
					/>
					<BtnPrimary
						btnIcon={
							<CameraSwitchIcon cls=" w-full text-lg scale-150 text-slate-800" />
						}
						btnTitle="Switch Camera"
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
