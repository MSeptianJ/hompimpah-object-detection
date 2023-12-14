import PropTypes from 'prop-types';
import { StarFillIcon, StarOutlineIcon } from '../../libs/icons';

const Scores = ({ score }) => {
	if (score === 0) {
		return (
			<>
				<StarOutlineIcon className=" text-accentColor" />
				<StarOutlineIcon className=" text-accentColor" />
				<StarOutlineIcon className=" text-accentColor" />
			</>
		);
	}

	if (score === 1) {
		return (
			<>
				<StarFillIcon className=" text-accentColor" />
				<StarOutlineIcon className=" text-accentColor" />
				<StarOutlineIcon className=" text-accentColor" />
			</>
		);
	}

	if (score === 2) {
		return (
			<>
				<StarFillIcon className=" text-accentColor" />
				<StarFillIcon className=" text-accentColor" />
				<StarOutlineIcon className=" text-accentColor" />
			</>
		);
	}

	if (score === 3) {
		return (
			<>
				<StarFillIcon className=" text-accentColor" />
				<StarFillIcon className=" text-accentColor" />
				<StarFillIcon className=" text-accentColor" />
			</>
		);
	}

	if (score >= 3) {
		return <p>You Win !!!</p>;
	}

	return null;
};

Scores.propTypes = {
	score: PropTypes.number,
};

export default Scores;
