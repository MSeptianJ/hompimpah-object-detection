import { addPlayerScore, addSystemScore } from '../libs/firebase/FirebaseDB';
import {
	playLoseRoundSound,
	playTieRoundSound,
	playWinRoundSound,
} from './sound';

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
			playWinRoundSound();

			return 'Win';
		} else if (result == 2 || result + 3 == 2) {
			await addSystemScore(gameRound, uid);
			playLoseRoundSound();

			return 'Lose';
		} else {
			playTieRoundSound();

			return 'Tie';
		}
	} catch (error) {
		console.error(error);
		return error;
	}
};

export default ScoringRPS;
