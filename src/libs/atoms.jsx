import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Modals
export const backModalAtom = atom(false);
export const tutorModalAtom = atom(false);
export const webCamModalAtom = atom(false);

// WebCams
export const camModeAtom = atom('user');
export const screenShotAtom = atom(null);
export const detectDataAtom = atom(null);

// Auth
export const userUIDAtom = atomWithStorage('User', null);

// Game
export const gamesAtom = atomWithStorage('Games', []);
export const gameResultAtom = atom(null);

// Game States
export const imgAccStateAtom = atom(false);
export const plyMovedStateAtom = atom(false);
export const sysMovedStateAtom = atom(false);
export const roundStateAtom = atom(false);
export const gameStateAtom = atom(false);
