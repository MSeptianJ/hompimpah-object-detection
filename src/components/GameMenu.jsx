const GameMenu = () => {
	const handleGoBack = () => {
		console.log('Back');
	};
	const handleDisplayCam = () => {
		console.log('Camera');
	};
	const handleTutorial = () => {
		console.log('Tutorial');
	};

	return (
		<div className=" mx-auto flex w-full max-w-md items-center justify-around text-center">
			<button
				onClick={handleGoBack}
				className=" block w-1/5 cursor-pointer rounded-md bg-slate-300 p-3 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Exit
			</button>
			<button
				onClick={handleDisplayCam}
				className=" block w-1/5 cursor-pointer rounded-md bg-slate-300 p-3 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Camera
			</button>
			<button
				onClick={handleTutorial}
				className=" block w-1/5 cursor-pointer rounded-md bg-slate-300 p-3 text-sm font-bold uppercase text-gray-900 transition-all hover:bg-opacity-40"
			>
				Tutorial
			</button>
		</div>
	);
};

GameMenu.propTypes = {};

export default GameMenu;
