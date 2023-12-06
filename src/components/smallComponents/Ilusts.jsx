import ROCK from '../../assets/img/rock-ilust.svg';
import PAPER from '../../assets/img/paper-ilust.svg';
import SCISSOR from '../../assets/img/scissors-ilust.svg';

export const RockIlust = () => {
	return (
		<img
			src={ROCK}
			alt="Rock Illustration"
			className=" mx-auto w-28 max-w-[200px] p-4"
		/>
	);
};

export const PaperIlust = () => {
	return (
		<img
			src={PAPER}
			alt="Paper Illustration"
			className=" mx-auto w-28 max-w-[200px] p-4"
		/>
	);
};
export const ScissorIlust = () => {
	return (
		<img
			src={SCISSOR}
			alt="Scissor Illustration"
			className=" mx-auto w-28 max-w-[200px] p-4"
		/>
	);
};
