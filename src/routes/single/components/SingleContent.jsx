import PropTypes from 'prop-types';
import Scores from '../../../components/featureComponents/Scores';
import Choices from '../../../components/featureComponents/Choices';

const SingleContent = ({ P1Score, P1Choise, P2Score, P2Choise }) => {
	return (
		<>
			<div className=" mx-auto flex h-full w-full flex-col items-center justify-around gap-3 rounded-[4px] bg-primaryColor p-6">
				<div className=" flex w-full items-center justify-between">
					<p className=" text-sm font-bold">You</p>
					<div className=" flex items-center gap-2 text-lg">
						<Scores score={P1Score} />
					</div>
				</div>
				<div className=" mx-auto flex aspect-square w-full flex-col items-center justify-center rounded-[4px] border-2 border-secondaryColor">
					<Choices choice={P1Choise} />
				</div>
			</div>

			<div className=" mx-auto flex h-full w-full flex-col items-center justify-around gap-3 rounded-[4px] bg-primaryColor p-6">
				<div className=" flex w-full items-center justify-between">
					<p className=" text-sm font-bold">Computer</p>
					<div className=" flex items-center gap-2 text-lg">
						<Scores score={P2Score} />
					</div>
				</div>
				<div className=" mx-auto flex aspect-square w-full flex-col items-center justify-center rounded-[4px] border-2 border-secondaryColor">
					<Choices choice={P2Choise} />
				</div>
			</div>
		</>
	);
};

SingleContent.propTypes = {
	P1Choise: PropTypes.string,
	P1Score: PropTypes.number,
	P2Choise: PropTypes.string,
	P2Score: PropTypes.number,
};

export default SingleContent;
