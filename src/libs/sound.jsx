import btnSoundA from '../assets/sound/zapsplat_multimedia_button_click_bright_1.mp3';
import btnSoundB from '../assets/sound/zapsplat_multimedia_button_click_bright_2.mp3';
import btnSoundC from '../assets/sound/zapsplat_multimedia_button_click_bright_3.mp3';

const btnSoundObject = [btnSoundA, btnSoundB, btnSoundC];

const randmizer = (limit) => {
	return Math.floor(Math.random() * limit);
};

export const playButtonSound = () => {
	new Audio(btnSoundObject[randmizer(2)]).play();
};
