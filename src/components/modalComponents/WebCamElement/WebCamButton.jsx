import PropTypes from 'prop-types';
import BtnPrimary from '../../smallComponents/BtnPrimary';
import { playCameraSound } from '../../../libs/sound';
import { useAtom } from 'jotai';
import { detImgAtom } from '../../../libs/atoms';

const WebCamButton = ({ handleBack, handleDetect, handleChangeCam }) => {
	const [img, setImg] = useAtom(detImgAtom);

	const handleRetry = () => {
		setImg(null);
	};

	return (
		<div className=" text-cente grid w-full max-w-md grid-cols-3 gap-4 px-4">
			<BtnPrimary
				text="Back"
				btnFunction={handleBack}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>

			{img ? (
				<>
					<BtnPrimary
						text="Retry"
						btnFunction={handleRetry}
						btnStyles={'bg-blue-400 hover:bg-blue-600'}
					/>
					<BtnPrimary
						text="Accept"
						btnFunction={handleBack}
						btnStyles={'bg-green-400 hover:bg-green-600'}
					/>
				</>
			) : (
				<>
					<BtnPrimary
						text="Detect"
						btnFunction={handleDetect}
						btnSound={playCameraSound}
						btnStyles={'bg-slate-500 hover:bg-gray-700'}
					/>
					<BtnPrimary
						text="Switch"
						btnFunction={handleChangeCam}
						btnStyles={'bg-slate-500 hover:bg-gray-700'}
					/>
				</>
			)}
		</div>
	);
};

WebCamButton.propTypes = {
	handleBack: PropTypes.func,
	handleDetect: PropTypes.func,
	handleChangeCam: PropTypes.func,
};

export default WebCamButton;
