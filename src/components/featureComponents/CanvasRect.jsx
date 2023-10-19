import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { detDataAtom } from '../../libs/atoms';
import { useEffect, useRef } from 'react';
import randomizer from '../../scripts/randomizer';

const CanvasRect = ({ isSuccess }) => {
	const [detection] = useAtom(detDataAtom);
	const canvasRef = useRef(null);

	const randomColor = () => {
		const r = randomizer(256);
		const g = randomizer(256);
		const b = randomizer(256);

		return `rgba(${r}, ${g}, ${b}, 0.5)`;
	};

	const drawBox = () => {
		detection?.predictions.map((pred) => {
			const confNum = Math.floor(pred.confidence * 100);
			const canvasEl = canvasRef.current;
			const ctx = canvasEl.getContext('2d');
			ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
			const color = randomColor();

			if (confNum >= 79) {
				ctx.font = '14px sans-serif';

				// bounding box
				ctx.lineWidth = 2;
				ctx.strokeStyle = color;
				ctx.strokeRect(pred.x, pred.y, pred.width, pred.height);

				// Label bg
				ctx.fillStyle = color;
				ctx.fillRect(pred.x - 1, pred.y - 14, pred.width + 2, 14);

				// Label
				ctx.fillStyle = 'black';
				ctx.fillText(`${pred.class} ${confNum}%`, pred.x - 1, pred.y - 3);
			} else {
				// Label bg
				ctx.fillStyle = 'rgba(100, 116, 139, 0.6)';
				ctx.fillRect(0, 0, detection?.image.width, 15);

				ctx.fillStyle = 'black';
				ctx.textAlign = 'center';
				ctx.fillText(
					'Detection Score not High Enough',
					detection?.image.width / 2,
					10
				);
			}
		});
		console.log(detection);
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
