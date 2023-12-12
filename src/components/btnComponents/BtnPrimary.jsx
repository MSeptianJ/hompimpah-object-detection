import PropTypes from 'prop-types';
import { playButtonSound } from '../../scripts/sound';

const BtnPrimary = ({
	btnText,
	btnIcon,
	btnFunction,
	btnStyles,
	btnSound,
	btnDisabled,
	btnTitle,
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
			className={` block cursor-pointer font-bold transition-all ${btnStyles}`}
			onClick={handleBtnClick}
			title={btnTitle}
		>
			{btnIcon}
			{btnText || ''}
		</button>
	);
};

BtnPrimary.propTypes = {
	btnText: PropTypes.string,
	btnIcon: PropTypes.object,
	btnFunction: PropTypes.func,
	btnSound: PropTypes.func,
	btnStyles: PropTypes.string,
	btnDisabled: PropTypes.bool,
	btnTitle: PropTypes.string,
};

export default BtnPrimary;
