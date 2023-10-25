import randomizer from './randomizer';

const choises = ['Paper', 'Rock', 'Scissors'];

const choiseSelector = () => {
	return choises[randomizer(2)];
};

export default choiseSelector;
