import PropTypes from 'prop-types';
import { StarFillIcon, StarOutlineIcon } from '../libs/icons';

const Scores = ({ score }) => {
	if (score === 0) {
		return (
			<>
				<StarOutlineIcon />
				<StarOutlineIcon />
				<StarOutlineIcon />
			</>
		);
	}

	if (score === 1) {
		return (
			<>
				<StarFillIcon />
				<StarOutlineIcon />
				<StarOutlineIcon />
			</>
		);
	}

	if (score === 2) {
		return (
			<>
				<StarFillIcon />
				<StarFillIcon />
				<StarOutlineIcon />
			</>
		);
	}

	if (score === 3) {
		return (
			<>
				<StarFillIcon />
				<StarFillIcon />
				<StarFillIcon />
			</>
		);
	}

	return null;
};

Scores.propTypes = {
	score: PropTypes.number,
};

export default Scores;
