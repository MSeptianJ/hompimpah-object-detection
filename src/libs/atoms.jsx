import { atom } from 'jotai';

// Modals
export const backConfirmAtom = atom(false);
export const tutorGameAtom = atom(false);
export const webCamAtom = atom(false);

// WebCams
export const detImgAtom = atom(null);
export const camModeAtom = atom('user');
export const detDataAtom = atom(null);

// Auth
export const anonUserAtom = atom({});

// Game
export const gameRoundAtom = atom([]);
export const gameResultAtom = atom(null);

// States
export const accImgAtom = atom(false);
export const sysMovedAtom = atom(false);
