import PropTypes from 'prop-types';

const WebCamButton = ({ handleBack, handleDetect, handleChangeCam }) => {
	return (
		<div className=" mx-auto flex w-full  max-w-md items-center justify-around text-center">
			<button
				className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
				onClick={handleBack}
			>
				Back
			</button>
			<button
				className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
				onClick={handleDetect}
			>
				Detect
			</button>
			<button
				className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
				onClick={handleChangeCam}
			>
				Change Camera
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
