import PropTypes from 'prop-types';
import { playButtonSound } from '../../scripts/sound';

const BtnPrimary = ({ text, btnFunction, btnStyles, btnSound }) => {
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
			className={` w-full rounded-sm p-4 text-center text-sm font-bold uppercase shadow-lg transition-all ${btnStyles}`}
			onClick={handleBtnClick}
		>
			{text || 'Click'}
		</button>
	);
};

BtnPrimary.propTypes = {
	text: PropTypes.string,
	btnFunction: PropTypes.func,
	btnSound: PropTypes.func,
	btnStyles: PropTypes.string,
};

export default BtnPrimary;
