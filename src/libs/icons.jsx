import PropTypes from 'prop-types';
import { AiFillCheckSquare } from 'react-icons/ai';
import { BiSolidBookAlt } from 'react-icons/bi';
import {
	FaAngleRight,
	FaArrowDown,
	FaArrowUp,
	FaExternalLinkAlt,
	FaRedoAlt,
} from 'react-icons/fa';
import { GoStar, GoStarFill } from 'react-icons/go';
import { PiCameraFill, PiCameraRotateFill } from 'react-icons/pi';
import { TiArrowBack } from 'react-icons/ti';

export const StarOutlineIcon = ({ className }) => {
	return <GoStar className={className} />;
};
StarOutlineIcon.propTypes = {
	className: PropTypes.string,
};

export const StarFillIcon = ({ className }) => {
	return <GoStarFill className={className} />;
};
StarFillIcon.propTypes = {
	className: PropTypes.string,
};

export const GoBackIcon = ({ className }) => {
	return <TiArrowBack className={className} />;
};
GoBackIcon.propTypes = {
	className: PropTypes.string,
};

export const RedoIcon = ({ className }) => {
	return <FaRedoAlt className={className} />;
};
RedoIcon.propTypes = {
	className: PropTypes.string,
};

export const ArrowDownIcon = ({ className }) => {
	return <FaArrowDown className={className} />;
};
ArrowDownIcon.propTypes = {
	className: PropTypes.string,
};

export const ArrowUpIcon = ({ className }) => {
	return <FaArrowUp className={className} />;
};
ArrowUpIcon.propTypes = {
	className: PropTypes.string,
};

export const TutorialIcon = ({ className }) => {
	return <BiSolidBookAlt className={className} />;
};
TutorialIcon.propTypes = {
	className: PropTypes.string,
};

export const AcceptIcon = ({ className }) => {
	return <AiFillCheckSquare className={className} />;
};
AcceptIcon.propTypes = {
	className: PropTypes.string,
};

export const CameraIcon = ({ className }) => {
	return <PiCameraFill className={className} />;
};
CameraIcon.propTypes = {
	className: PropTypes.string,
};

export const CameraSwitchIcon = ({ className }) => {
	return <PiCameraRotateFill className={className} />;
};
CameraSwitchIcon.propTypes = {
	className: PropTypes.string,
};

export const AngleRightIcon = ({ className }) => {
	return <FaAngleRight className={className} />;
};
AngleRightIcon.propTypes = {
	className: PropTypes.string,
};

export const LinkIcon = ({ className }) => {
	return <FaExternalLinkAlt className={className} />;
};
LinkIcon.propTypes = {
	className: PropTypes.string,
};
