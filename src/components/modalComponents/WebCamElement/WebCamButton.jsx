import PropTypes from 'prop-types';

const WebCamButton = ({ handleBack, handleDetect, handleChangeCam }) => {
	return (
		<div className=" text-cente grid w-full max-w-md grid-cols-3 gap-4 px-4">
			<button
				className=" block rounded-sm bg-slate-500 p-4 text-sm font-bold uppercase transition-all hover:bg-gray-700"
				onClick={handleBack}
			>
				Back
			</button>
			<button
				className=" block rounded-sm bg-slate-500 p-4 text-sm font-bold uppercase transition-all hover:bg-gray-700"
				onClick={handleDetect}
			>
				Detect
			</button>
			<button
				className=" block rounded-sm bg-slate-500 p-4 text-sm font-bold uppercase transition-all hover:bg-gray-700"
				onClick={handleChangeCam}
			>
				Switch
			</button>
		</div>
	);
};

WebCamButton.propTypes = {
	handleBack: PropTypes.func,
	handleDetect: PropTypes.func,
	handleChangeCam: PropTypes.func,
};

export default WebCamButton;
