import { GoStar, GoStarFill } from 'react-icons/go';
import PropTypes from 'prop-types';

export const StarOutlineIcon = ({ cls }) => {
	return <GoStar className={cls} />;
};

export const StarFillIcon = ({ cls }) => {
	return <GoStarFill className={cls} />;
};

StarOutlineIcon.propTypes = {
	cls: PropTypes.string,
};

StarFillIcon.propTypes = {
	cls: PropTypes.string,
};
