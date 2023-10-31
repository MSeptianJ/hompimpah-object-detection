import { addPlayerScore, addSystemScore } from '../libs/firebase/FirebaseDB';
import { playLoseSound, playTieSound, playWinSound } from './sound';

export const Score = async (move1, move2, gameRound, userData) => {
	try {
		const moveList = ['Rock', 'Paper', 'Scissors'];
		const indexMove1 = moveList.findIndex((move) => {
			return move === move1;
		});
		const indexMove2 = moveList.findIndex((move) => {
			return move === move2;
		});
		const result = indexMove1 - indexMove2;

		if (result == 1 || result + 3 == 1) {
			await addPlayerScore(gameRound, userData);
			playWinSound();
			return 'Win';
		} else if (result == 2 || result + 3 == 2) {
			await addSystemScore(gameRound, userData);
			playLoseSound();
			return 'Lose';
		} else {
			playTieSound();
			return 'Tie';
		}
	} catch (error) {
		console.error(error);
		return error;
	}
};
