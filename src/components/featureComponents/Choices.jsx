import PropTypes from 'prop-types';
import { PaperIlust, RockIlust, ScissorIlust } from '../smallComponents/Ilusts';

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

	if (choice === 'Rock') {
		return (
			<>
				{show[0].ilust}
				<p className=" text-lg font-bold">{show[0].name}</p>
			</>
		);
	}

	if (choice === 'Paper') {
		return (
			<>
				{show[1].ilust}
				<p className=" text-lg font-bold">{show[1].name}</p>
			</>
		);
	}

	if (choice === 'Scissors') {
		return (
			<>
				{show[2].ilust}
				<p className=" text-lg font-bold">{show[2].name}</p>
			</>
		);
	}

	return <p className=" text-lg font-bold">Press Camera</p>;
};

Choices.propTypes = {
	choice: PropTypes.string,
};

export default Choices;
