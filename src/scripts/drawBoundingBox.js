const classColor = (pred) => {
	if (pred === 'Rock') {
		return '#FE2BF1';
	} else if (pred === 'Paper') {
		return '#00DFBA';
	} else if (pred === 'Scissors') {
		return '#0C7CEB';
	}
};

const boxConverter = (predData) => {
	let obj = {};
	obj.x1 = predData.x - predData.width / 2;
	obj.y1 = predData.y - predData.height / 2;
	obj.x2 = predData.x + predData.width / 2;
	obj.y2 = predData.y + predData.height / 2;
	return obj;
};

const drawBoundingBox = (detection, canvasRef) => {
	detection.map((pred) => {
		const confNum = Math.floor(pred.confidence * 100);
		const canvasEl = canvasRef.current;
		const ctx = canvasEl.getContext('2d');

		const color = classColor(pred.class);

		const { x1, x2, y1, y2 } = boxConverter(pred.bbox);
		const boxWidth = x2 - x1;
		const boxHeight = y2 - y1;
		const fontSize = 24;

		ctx.font = `${fontSize}px Inter Var`;

		// bounding box
		ctx.lineWidth = 2;
		ctx.strokeStyle = color;
		ctx.strokeRect(x1, y1, boxWidth, boxHeight);

		// Label bg
		ctx.fillStyle = color;
		ctx.fillRect(x1 - 1, y1 - fontSize, boxWidth + 3, fontSize);

		// Label
		ctx.fillStyle = 'black';
		ctx.fillText(`${pred.class} ${confNum}%`, x1 - 1, y1 - 3);
	});
};

export default drawBoundingBox;
