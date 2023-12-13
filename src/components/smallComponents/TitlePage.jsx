import PropTypes from 'prop-types';

const TitlePage = ({ titleText, accentText, isCol }) => {
	return (
		<div className="z-0 w-full text-center">
			<h2
				className={` flex items-center justify-center gap-3 text-3xl font-bold uppercase text-primaryColor ${
					isCol ? 'flex-col' : ''
				}`}
			>
				<p>{titleText}</p>
				{accentText && <p className=" text-accentColor">{accentText || ''}</p>}
			</h2>
		</div>
	);
};

export default TitlePage;

TitlePage.propTypes = {
	titleText: PropTypes.string.isRequired,
	accentText: PropTypes.string,
	isCol: PropTypes.bool,
};
