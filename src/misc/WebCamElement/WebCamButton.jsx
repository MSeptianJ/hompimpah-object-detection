import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import {
	detectDataAtom,
	isCamActiveAtom,
	screenShotAtom,
} from '../../libs/atoms';
import {
	AcceptIcon,
	CameraIcon,
	CameraSwitchIcon,
	GoBackIcon,
	RedoIcon,
} from '../../libs/icons';
import { playCameraSound } from '../../scripts/sound';
import BtnPrimary from '../../components/btnComponents/BtnPrimary';

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
	const [isCamActive] = useAtom(isCamActiveAtom);

	return (
		<div className=" mx-auto grid w-full max-w-md grid-cols-3 gap-4 px-4 text-center">
			<BtnPrimary
				btnIcon={
					<GoBackIcon className=" w-full scale-150 text-lg text-slate-800" />
				}
				btnTitle="Go Back"
				btnFunction={backBtn}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>

			{screenShot ? (
				<>
					<BtnPrimary
						btnDisabled={isLoading ? true : false}
						btnIcon={
							<RedoIcon className="w-full scale-125 text-lg text-slate-800" />
						}
						btnTitle="Redo Detection"
						btnFunction={retryBtn}
						btnStyles={
							isLoading
								? 'bg-slate-500 hover:bg-slate-600'
								: 'bg-blue-400 hover:bg-blue-500'
						}
					/>
					<BtnPrimary
						btnDisabled={detection?.predictions.length ? false : true}
						btnIcon={
							<AcceptIcon className="w-full scale-150 text-lg text-slate-800" />
						}
						btnTitle="Accept Detection"
						btnFunction={accBtn}
						btnStyles={
							detection?.predictions.length
								? 'bg-green-400 hover:bg-green-500'
								: 'bg-slate-500 hover:bg-slate-600'
						}
					/>
				</>
			) : (
				<>
					<BtnPrimary
						btnIcon={
							<CameraIcon className=" w-full scale-150 text-lg text-slate-800" />
						}
						btnTitle="Start Detection"
						btnFunction={detectBtn}
						btnSound={playCameraSound}
						btnStyles={
							isCamActive
								? 'bg-green-400 hover:bg-green-500'
								: 'bg-slate-500 hover:bg-slate-600'
						}
						btnDisabled={isCamActive ? false : true}
					/>
					<BtnPrimary
						btnIcon={
							<CameraSwitchIcon className=" w-full scale-150 text-lg text-slate-800" />
						}
						btnTitle="Switch Camera"
						btnFunction={switchCamBtn}
						btnStyles={'bg-blue-400 hover:bg-blue-500'}
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
