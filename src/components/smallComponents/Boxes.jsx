import randomizer from '../../scripts/randomizer';
import PropTypes from 'prop-types';

const Box = ({ isTop, isLeft, size }) => {
	const padArr = ['p-5', 'p-8', 'p-10'];
	const topArr = ['-top-5', 'top-1', 'top-5', 'top-10', 'top-12', 'top-1/2'];
	const bottomArr = [
		'-bottom-5',
		'bottom-1',
		'bottom-5',
		'bottom-10',
		'bottom-12',
		'bottom-1/2',
	];
	const leftArr = [
		'-left-5',
		'left-1',
		'left-5',
		'left-10',
		'left-12',
		'left-1/2',
	];
	const rightArr = [
		'-right-5',
		'right-1',
		'right-5',
		'right-10',
		'right-12',
		'right-1/2',
	];

	const padding = padArr[size || 0];
	const vertical = isTop ? topArr[randomizer(6)] : bottomArr[randomizer(6)];
	const horizontal = isLeft ? leftArr[randomizer(6)] : rightArr[randomizer(6)];

	return (
		<div
			className={` absolute border-2 border-primaryColor shadow-xl ${padding} ${vertical} ${horizontal}`}
		></div>
	);
};

Box.propTypes = {
	size: PropTypes.number,
	isTop: PropTypes.bool,
	isLeft: PropTypes.bool,
};

const Boxes = () => {
	return (
		<div className=" absolute top-0 grid h-screen w-full grid-cols-2 grid-rows-2 gap-5 overflow-hidden">
			<div className=" relative">
				<Box size={2} isTop isLeft />
				<Box size={1} isTop isLeft />
			</div>

			<div className=" relative">
				<Box size={1} isTop />
				<Box size={2} isTop />
			</div>

			<div className=" relative">
				<Box size={0} isLeft />
				<Box size={2} isLeft />
			</div>

			<div className=" relative">
				<Box size={0} />
				<Box size={1} />
			</div>
		</div>
	);
};

Boxes.propTypes = {};

export default Boxes;
