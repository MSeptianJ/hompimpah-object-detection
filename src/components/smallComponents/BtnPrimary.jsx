import PropTypes from 'prop-types';
import { playButtonSound } from '../../scripts/sound';

const BtnPrimary = ({
	btnText,
	btnFunction,
	btnStyles,
	btnSound,
	btnDisabled,
}) => {
	const handleBtnClick = () => {
		if (btnSound) {
			btnSound();
		} else {
			playButtonSound();
		}

		if (btnFunction) {
			btnFunction();
		}
	};

	return (
		<button
			disabled={btnDisabled}
			className={` w-full rounded-sm p-4 text-center text-sm font-bold uppercase shadow-lg transition-all ${btnStyles}`}
			onClick={handleBtnClick}
		>
			{btnText || 'Click'}
		</button>
	);
};

BtnPrimary.propTypes = {
	btnText: PropTypes.string,
	btnFunction: PropTypes.func,
	btnSound: PropTypes.func,
	btnStyles: PropTypes.string,
	btnDisabled: PropTypes.bool,
};

export default BtnPrimary;
