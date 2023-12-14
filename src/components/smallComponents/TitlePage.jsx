import PropTypes from 'prop-types';

const TitlePage = ({ titleText, accentText, isCol }) => {
	return (
		<div className="z-0 m-auto">
			<div className=" m-auto rounded-[4px] bg-primaryColor text-xl font-bold uppercase text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] ">
				<div
					className={`${
						isCol ? 'flex-col' : ''
					} flex w-full items-center justify-center gap-4 p-3 `}
				>
					<p>{titleText}</p>
					{accentText && (
						<p className=" text-accentColor">{accentText || ''}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default TitlePage;

TitlePage.propTypes = {
	titleText: PropTypes.string.isRequired,
	accentText: PropTypes.string,
	isCol: PropTypes.bool,
};
