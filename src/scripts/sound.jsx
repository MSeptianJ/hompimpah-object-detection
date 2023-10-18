import btnSoundA from '../assets/sound/button_click_bright_1.mp3';
import btnSoundB from '../assets/sound/button_click_bright_2.mp3';
import btnSoundC from '../assets/sound/button_click_bright_3.mp3';
import cmrSoundA from '../assets/sound/camera_shutter_1.mp3';
import cmrSoundB from '../assets/sound/camera_shutter_2.mp3';
import cmrSoundC from '../assets/sound/camera_shutter_3.mp3';
import randomizer from './randomizer';

const btnSoundObject = [btnSoundA, btnSoundB, btnSoundC];
const cmrSoundObject = [cmrSoundA, cmrSoundB, cmrSoundC];

const playRandomSound = (arr, limit) => {
	new Audio(arr[[randomizer(limit)]]).play();
};

export const playButtonSound = () => {
	playRandomSound(btnSoundObject, 2);
};

export const playCameraSound = () => {
	playRandomSound(cmrSoundObject, 2);
};
