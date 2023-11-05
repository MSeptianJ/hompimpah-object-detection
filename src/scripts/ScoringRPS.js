import { addPlayerScore, addSystemScore } from '../libs/firebase/FirebaseDB';
import { playLoseSound, playTieSound, playWinSound } from './sound';

const ChangeRPSMovetoIndex = (choise) => {
	const moveList = ['Rock', 'Paper', 'Scissors'];
	const index = moveList.findIndex((move) => move === choise);
	return index;
};

const ScoringRPS = async (move1, move2, gameRound, uid) => {
	try {
		const indexPlayer = ChangeRPSMovetoIndex(move1);
		const indexSystem = ChangeRPSMovetoIndex(move2);
		const result = indexPlayer - indexSystem;

		if (result == 1 || result + 3 == 1) {
			await addPlayerScore(gameRound, uid);
			playWinSound();

			return 'Win';
		} else if (result == 2 || result + 3 == 2) {
			await addSystemScore(gameRound, uid);
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

export default ScoringRPS;
