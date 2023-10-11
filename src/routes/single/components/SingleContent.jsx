import PropTypes from 'prop-types';
import Scores from '../../../components/featureComponents/Scores';
import Choices from '../../../components/featureComponents/Choices';

const SingleContent = ({ P1Score, P1Choise, P2Score, P2Choise }) => {
	return (
		<>
			<div className=" mx-auto mb-4">
				<div className=" mb-2 flex w-full items-center justify-between">
					<p className=" text-sm font-bold">You</p>
					<div className=" flex items-center gap-2">
						<Scores score={P1Score} />
					</div>
				</div>
				<div className=" mx-auto flex min-h-[180px] w-full flex-col items-center justify-center rounded-md border-2 border-slate-800">
					<Choices choice={P1Choise} />
				</div>
			</div>

			<div className=" mx-auto">
				<div className=" mb-2 flex w-full items-center justify-between">
					<p className=" text-sm font-bold">Computer</p>
					<div className=" flex items-center gap-2">
						<Scores score={P2Score} />
					</div>
				</div>
				<div className=" mx-auto flex min-h-[180px] w-full flex-col items-center justify-center rounded-md border-2 border-slate-800">
					<Choices choice={P2Choise} />
				</div>
			</div>
		</>
	);
};

SingleContent.propTypes = {
	P1Choise: PropTypes.number,
	P1Score: PropTypes.number,
	P2Choise: PropTypes.number,
	P2Score: PropTypes.number,
};

export default SingleContent;
