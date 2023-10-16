import PropTypes from 'prop-types';
import { playButtonSound } from '../../libs/sound';

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
			className={` w-full rounded-sm p-4 text-center text-sm font-bold uppercase transition-all ${btnStyles}`}
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
