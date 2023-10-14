import { atom } from 'jotai';

// Modals
export const backConfirmAtom = atom(false);
export const tutorGameAtom = atom(false);
export const webCamAtom = atom(false);

// WebCams
export const detImgAtom = atom(null);
export const camModeAtom = atom('user');
export const detDataAtom = atom(null);
