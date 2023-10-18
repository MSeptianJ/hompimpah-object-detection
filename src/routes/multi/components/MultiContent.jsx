import PropTypes from 'prop-types';
import Scores from '../../../components/featureComponents/Scores';
import Choices from '../../../components/featureComponents/Choices';

const MultiContent = ({ P1Score, P1Choise, P2Score, P2Choise }) => {
	return (
		<>
			<div className=" mx-auto flex h-full w-full flex-col items-center justify-around">
				<div className=" flex w-full items-center justify-between">
					<p className=" text-sm font-bold">You</p>
					<div className=" flex items-center gap-2">
						<Scores score={P1Score} />
					</div>
				</div>
				<div className=" mx-auto flex aspect-square w-full flex-col items-center justify-center rounded-sm border-2 border-slate-800">
					<Choices choice={P1Choise} />
				</div>
			</div>

			<div className=" mx-auto flex h-full w-full flex-col items-center justify-around">
				<div className=" flex w-full items-center justify-between">
					<p className=" text-sm font-bold">Computer</p>
					<div className=" flex items-center gap-2">
						<Scores score={P2Score} />
					</div>
				</div>
				<div className=" mx-auto flex aspect-square w-full flex-col items-center justify-center rounded-sm border-2 border-slate-800">
					<Choices choice={P2Choise} />
				</div>
			</div>
		</>
	);
};

MultiContent.propTypes = {
	P1Choise: PropTypes.number,
	P1Score: PropTypes.number,
	P2Choise: PropTypes.number,
	P2Score: PropTypes.number,
};

export default MultiContent;
