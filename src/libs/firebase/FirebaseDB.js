import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	serverTimestamp,
	setDoc,
} from 'firebase/firestore';
import choiseSelector from '../../scripts/choiseSelector';
import { db } from '../config/firebase';

const COLNAME = 'Dev-games';

const gameColRef = () => {
	return collection(db, COLNAME);
};

const gameDocRef = (uid) => {
	return doc(db, COLNAME, uid);
};

export const getAllGame = async () => {
	try {
		const colRef = gameColRef();
		const gameColData = await getDocs(colRef);

		const docs = gameColData.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		return docs;
	} catch (error) {
		console.error(error);
		return;
	}
};

export const addGameRound = async (uid) => {
	try {
		const docRef = gameDocRef(uid);
		const timeStamp = serverTimestamp();

		const newGame = {
			choisePA: '',
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

export const addPlayerMove = async (gameRound, detection, uid) => {
	try {
		if (!detection) {
			return;
		}

		const docRef = gameDocRef(uid);
		const maxConfidence = detection.reduce((prev, current) =>
			prev && prev.confidence > current.confidence ? prev : current
		);
		const playerChoise = maxConfidence.class;

		const newGameData = {
			...gameRound,
			choisePA: String(playerChoise),
		};

		await setDoc(docRef, newGameData);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const addSystemMove = async (gameRound, uid) => {
	try {
		const docRef = gameDocRef(uid);
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

export const addPlayerScore = async (gameRound, uid) => {
	try {
		const docRef = gameDocRef(uid);
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

export const addSystemScore = async (gameRound, uid) => {
	try {
		const docRef = gameDocRef(uid);
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

export const delGameRound = async (uid) => {
	try {
		const docRef = gameDocRef(uid);

		await deleteDoc(docRef);
	} catch (error) {
		console.error(error);
		return error;
	}
};
