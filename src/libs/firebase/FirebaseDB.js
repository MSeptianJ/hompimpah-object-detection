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
import dateFormater from '../../scripts/dateFormater';

const gameColRef = query(collection(db, 'game'));

export const getAllGame = async () => {
	try {
		const gameColData = await getDocs(gameColRef);
		const docs = gameColData.docs.map((doc) => ({
			...doc.data(),
			id: doc.id,
		}));

		docs.map((data) => {
			return (data.createdAt = dateFormater(data?.createdAt?.toDate()));
		});
		return docs;
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const addGameRound = async (userData, predData) => {
	try {
		const docRef = doc(db, 'game', userData.uid);
		const createdAt = serverTimestamp();
		const choisePA = predData?.predictions.map((pred) => {
			return pred.class;
		});

		const newGame = {
			userId: userData.uid,
			choisePA: String(choisePA),
			choisePB: 0,
			scorePA: 0,
			scorePB: 0,
			createdAt,
		};

		await setDoc(docRef, newGame);
	} catch (error) {
		console.error(error);
		return error;
	}
};

export const delGameRound = async (userData) => {
	try {
		const docData = doc(db, 'game', userData.uid);
		await deleteDoc(docData);
	} catch (error) {
		console.error(error);
		return error;
	}
};
