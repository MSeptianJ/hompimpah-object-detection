import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import choiseSelector from '../../scripts/choiseSelector';

const gameColRef = query(collection(db, 'game'));

export const getAllGame = async () => {
	try {
		const gameColData = await getDocs(gameColRef);
		const docs = gameColData.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		return docs;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const addGameRound = async (userData, predData, games) => {
	try {
		const docRef = doc(db, 'game', userData.uid);
		const timeStamp = serverTimestamp();
		const choisePA = predData?.predictions.map((pred) => {
			return pred.class;
		});
		const gameRound = games.find((game) => game?.userId === userData?.uid);

		if (!gameRound) {
			const newGame = {
				userId: userData.uid,
				choisePA: String(choisePA),
				choisePB: '',
				scorePA: 0,
				scorePB: 0,
				timeStamp,
			};

			await setDoc(docRef, newGame);
		} else if (gameRound) {
			const newGame = {
				...gameRound,
				choisePA: String(choisePA),
			};

			await setDoc(docRef, newGame);
		}
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const addSystemChoise = async (gameRound, userData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);

		const sysChoise = choiseSelector();
		const newGameData = {
			...gameRound,
			choisePB: sysChoise,
		};

		await setDoc(docRef, newGameData);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const addPlayerScore = async (gameRound, userData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);

		const lastScore = gameRound.scorePA;

		const newGameData = {
			...gameRound,
			scorePA: lastScore + 1,
		};

		await setDoc(docRef, newGameData);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const addSystemScore = async (gameRound, userData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);
		const lastScore = gameRound.scorePB;

		const newGameData = {
			...gameRound,
			scorePB: lastScore + 1,
		};

		await setDoc(docRef, newGameData);
	} catch (error) {
		console.error(error);
		return error;
	}
};
export const addGameScore = async (gameRound, userData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);

		const newGameData = {
			...gameRound,
		};

		await setDoc(docRef, newGameData);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const delGameRound = async (userData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);
		await deleteDoc(docRef);
	} catch (error) {
		console.error(error);
		return error;
	}
};
