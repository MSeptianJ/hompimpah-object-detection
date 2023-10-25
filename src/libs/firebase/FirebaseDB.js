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

export const addGameRound = async (userData, predData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);
		const timeStamp = serverTimestamp();
		const choisePA = predData?.predictions.map((pred) => {
			return pred.class;
		});

		const newGame = {
			userId: userData.uid,
			choisePA: String(choisePA),
			choisePB: '',
			scorePA: 0,
			scorePB: 0,
			timeStamp,
		};

		await setDoc(docRef, newGame);
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
