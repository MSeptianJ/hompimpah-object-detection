import LOADING from '../../assets/img/loading.svg';

const NoUserPlacement = () => {
	return (
		<>
			<p className=" w-full font-semibold">
				Wait a Second or Please go to menu again
			</p>
			<div className=" w-full">
				<img className=" w-full" src={LOADING} alt="Loading Icon" />
			</div>
		</>
	);
};

export default NoUserPlacement;
