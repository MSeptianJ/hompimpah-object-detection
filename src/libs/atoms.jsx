import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Modals
export const backConfirmAtom = atom(false);
export const tutorGameAtom = atom(false);
export const webCamAtom = atom(false);

// WebCams
export const camModeAtom = atom('user');
export const detImgAtom = atom(null);
export const detDataAtom = atom(null);

// Auth
export const anonUserAtom = atomWithStorage('User', {});

// Game
export const gamesAtom = atomWithStorage('Games', []);
export const gameResultAtom = atom(null);

// States
export const accImgAtom = atom(false);
export const sysMovedAtom = atom(false);
export const roundStateAtom = atom(false);
export const gameStateAtom = atom(false);
