import btnSoundA from '../assets/sound/button_click_bright_1.mp3';
import btnSoundB from '../assets/sound/button_click_bright_2.mp3';
import cmrSoundA from '../assets/sound/camera_shutter_1.mp3';
import cmrSoundB from '../assets/sound/camera_shutter_2.mp3';
import cmrSoundC from '../assets/sound/camera_shutter_3.mp3';
import loseGameSound from '../assets/sound/lose-game.mp3';
import loseRoundSound from '../assets/sound/lose-round.mp3';
import tieRoundSound from '../assets/sound/tie-round.mp3';
import winGameSound from '../assets/sound/win-game.mp3';
import winRoundSound from '../assets/sound/win-round.mp3';
import randomizer from './randomizer';

const btnSoundObject = [btnSoundA, btnSoundB];
const cmrSoundObject = [cmrSoundA, cmrSoundB, cmrSoundC];

const playSFX = (sfx) => {
	return new Audio(sfx).play();
};

const playRandomSound = (arr, limit) => {
	playSFX(arr[[randomizer(limit)]]);
};

export const playButtonSound = () => {
	playRandomSound(btnSoundObject, 2);
};

export const playCameraSound = () => {
	playRandomSound(cmrSoundObject, 3);
};

export const playWinRoundSound = () => {
	playSFX(winRoundSound);
};

export const playLoseRoundSound = () => {
	playSFX(loseRoundSound);
};

export const playTieRoundSound = () => {
	playSFX(tieRoundSound);
};

export const playWinGameSound = () => {
	playSFX(winGameSound);
};

export const playLoseGameSound = () => {
	playSFX(loseGameSound);
};
