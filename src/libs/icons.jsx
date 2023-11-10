import PropTypes from 'prop-types';
import { AiFillCheckSquare } from 'react-icons/ai';
import { BiSolidBookAlt } from 'react-icons/bi';
import { FaRedoAlt } from 'react-icons/fa';
import { GoStar, GoStarFill } from 'react-icons/go';
import { PiCameraFill, PiCameraRotateFill } from 'react-icons/pi';
import { TiArrowBack } from 'react-icons/ti';

export const StarOutlineIcon = ({ cls }) => {
	return <GoStar className={cls} />;
};
StarOutlineIcon.propTypes = {
	cls: PropTypes.string,
};

export const StarFillIcon = ({ cls }) => {
	return <GoStarFill className={cls} />;
};
StarFillIcon.propTypes = {
	cls: PropTypes.string,
};

export const GoBackIcon = ({ cls }) => {
	return <TiArrowBack className={cls} />;
};
GoBackIcon.propTypes = {
	cls: PropTypes.string,
};

export const RedoIcon = ({ cls }) => {
	return <FaRedoAlt className={cls} />;
};
RedoIcon.propTypes = {
	cls: PropTypes.string,
};

export const TutorialIcon = ({ cls }) => {
	return <BiSolidBookAlt className={cls} />;
};
TutorialIcon.propTypes = {
	cls: PropTypes.string,
};

export const AcceptIcon = ({ cls }) => {
	return <AiFillCheckSquare className={cls} />;
};
AcceptIcon.propTypes = {
	cls: PropTypes.string,
};

export const CameraIcon = ({ cls }) => {
	return <PiCameraFill className={cls} />;
};
CameraIcon.propTypes = {
	cls: PropTypes.string,
};

export const CameraSwitchIcon = ({ cls }) => {
	return <PiCameraRotateFill className={cls} />;
};
CameraSwitchIcon.propTypes = {
	cls: PropTypes.string,
};
