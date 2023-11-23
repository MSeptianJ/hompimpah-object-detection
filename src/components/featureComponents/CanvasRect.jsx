import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { detectDataAtom } from '../../libs/atoms';
import randomizer from '../../scripts/randomizer';

const CanvasRect = ({ isSuccess }) => {
	const [detection] = useAtom(detectDataAtom);
	const canvasRef = useRef(null);

	const randomColor = () => {
		const r = randomizer(128);
		const g = randomizer(128);
		const b = randomizer(128);

		return `rgba(${r}, ${g}, ${b}, 0.5)`;
	};

	const boxConverter = (predData) => {
		let obj = {};
		obj.x1 = predData.x - predData.width / 2;
		obj.y1 = predData.y - predData.height / 2;
		obj.x2 = predData.x + predData.width / 2;
		obj.y2 = predData.y + predData.height / 2;
		return obj;
	};

	const drawBox = () => {
		detection?.predictions.map((pred) => {
			const confNum = Math.floor(pred.confidence * 100);
			const canvasEl = canvasRef.current;
			const ctx = canvasEl.getContext('2d');

			const color = randomColor();

			const { x1, x2, y1, y2 } = boxConverter(pred);
			const boxWidth = x2 - x1;
			const boxHeight = y2 - y1;

			ctx.font = '14px sans-serif';

			// bounding box
			ctx.lineWidth = 2;
			ctx.strokeStyle = color;
			ctx.strokeRect(x1, y1, boxWidth, boxHeight);

			// Label bg
			ctx.fillStyle = color;
			ctx.fillRect(x1 - 1, y1 - 14, boxWidth + 2, 14);

			// Label
			ctx.fillStyle = 'black';
			ctx.fillText(`${pred.class} ${confNum}%`, x1 - 1, y1 - 3);
		});
	};

	useEffect(() => {
		if (isSuccess) {
			drawBox();
		}
	}, [isSuccess]); // eslint-disable-line

	return (
		<canvas
			className=" absolute top-0"
			width={detection?.image.width}
			height={detection?.image.height}
			ref={canvasRef}
		></canvas>
	);
};

CanvasRect.propTypes = {
	canvasRef: PropTypes.object,
	isSuccess: PropTypes.bool,
};

export default CanvasRect;
