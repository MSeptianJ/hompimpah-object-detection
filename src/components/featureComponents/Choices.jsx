import PropTypes from 'prop-types';
import { ArrowDownIcon, ArrowUpIcon } from '../../libs/icons';
import { PaperIlust, RockIlust, ScissorIlust } from '../smallComponents/Ilusts';

const Choices = ({ choice, isDetecting }) => {
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

	return (
		<>
			{isDetecting && <ArrowUpIcon className=" w-full text-center" />}
			<p className=" my-3 text-lg font-bold">
				{isDetecting ? 'Show Your Hand' : 'Press Camera'}
			</p>
			{!isDetecting && <ArrowDownIcon className=" w-full text-center" />}
		</>
	);
};

Choices.propTypes = {
	choice: PropTypes.string,
	isDetecting: PropTypes.bool,
};

export default Choices;
