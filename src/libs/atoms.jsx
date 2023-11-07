import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// Modals
export const backModalAtom = atom(false);
export const tutorModalAtom = atom(false);
export const webCamModalAtom = atom(false);
export const roundEndModalAtom = atom(false);
export const gameEndModalAtom = atom(false);

// WebCams
export const camModeAtom = atom('user');
export const screenShotAtom = atom(null);
export const detectDataAtom = atom(null);

// Auth
export const userUIDAtom = atomWithStorage('User', null);

// Game
export const gamesAtom = atomWithStorage('Games', []);
export const roundResultAtom = atom(null);

// Game States
export const plsAddGameStateAtom = atom(false);
export const imgAccStateAtom = atom(false);
export const plyMovedStateAtom = atom(false);
export const sysMovedStateAtom = atom(false);
