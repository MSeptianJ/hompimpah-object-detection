import PropTypes from 'prop-types';
import BtnPrimary from '../../smallComponents/BtnPrimary';

const WebCamButton = ({ handleBack, handleDetect, handleChangeCam }) => {
	return (
		<div className=" text-cente grid w-full max-w-md grid-cols-3 gap-4 px-4">
			<BtnPrimary
				text="Back"
				btnFunction={handleBack}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>
			<BtnPrimary
				text="Detect"
				btnFunction={handleDetect}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>
			<BtnPrimary
				text="Switch"
				btnFunction={handleChangeCam}
				btnStyles={'bg-slate-500 hover:bg-gray-700'}
			/>
		</div>
	);
};

WebCamButton.propTypes = {
	handleBack: PropTypes.func,
	handleDetect: PropTypes.func,
	handleChangeCam: PropTypes.func,
};

export default WebCamButton;
