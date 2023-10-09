import PropTypes from 'prop-types';
import { PaperIlust, RockIlust, ScissorIlust } from '../Helper/ilusts';

const Choices = ({ choice }) => {
	const show = [
		{
			name: 'Rock',
			ilust: <RockIlust />,
		},
		{
			name: 'Paper',
			ilust: <PaperIlust />,
		},
		{
			name: 'Scissor',
			ilust: <ScissorIlust />,
		},
	];
	if (choice === 0) {
		return (
			<>
				{show[0].ilust}
				<p className=" text-lg font-bold">{show[0].name}</p>
			</>
		);
	}

	if (choice === 1) {
		return (
			<>
				{show[1].ilust}
				<p className=" text-lg font-bold">{show[1].name}</p>
			</>
		);
	}

	if (choice === 2) {
		return (
			<>
				{show[2].ilust}
				<p className=" text-lg font-bold">{show[2].name}</p>
			</>
		);
	}

	return null;
};

Choices.propTypes = {
	choice: PropTypes.number,
};

export default Choices;
