export const Score = (move1, move2) => {
	const moveList = ['Rock', 'Paper', 'Scissors'];
	const indexMove1 = moveList.findIndex((move) => {
		return move === move1;
	});
	const indexMove2 = moveList.findIndex((move) => {
		return move === move2;
	});
	const result = indexMove1 - indexMove2;

	if (result == 1 || result + 3 == 1) {
		return 'Win';
	} else if (result == 2 || result + 3 == 2) {
		return 'Lose';
	} else {
		return 'Tie';
	}
};
