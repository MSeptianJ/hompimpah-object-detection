import PropTypes from 'prop-types';

const TitlePage = ({ titleText }) => {
	return (
		<div className=" w-full text-center text-red-400">
			<h2 className=" text-2xl font-bold uppercase">{titleText}</h2>
		</div>
	);
};

export default TitlePage;

TitlePage.propTypes = {
	titleText: PropTypes.string.isRequired,
};
