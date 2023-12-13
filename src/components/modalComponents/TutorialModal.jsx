import { useSetAtom } from 'jotai';
import { tutorModalAtom } from '../../libs/atoms';
import { GoBackIcon } from '../../libs/icons';
import BtnPrimary from '../btnComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';
import TutorialText from '../smallComponents/TutorialText';
import Boxes from '../smallComponents/Boxes';

const TutorialModal = () => {
	const setTutorModal = useSetAtom(tutorModalAtom);

	const handle = () => {
		setTutorModal(false);
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-backColor">
			<Boxes />
			<TitlePage titleText="Tutorial" />

			<div className="z-0 row-span-4 mx-auto grid h-full w-3/4 gap-4 overflow-y-auto rounded-sm bg-primaryColor p-6 text-backColor shadow-lg">
				<TutorialText />
			</div>

			<div className=" group relative mx-auto rounded-md bg-primaryColor text-backColor shadow-lg transition-colors duration-300 hover:bg-accentColor ">
				<BtnPrimary
					btnText="Back"
					btnFunction={handle}
					btnStyles=" w-full p-3 flex items-center"
					btnIcon={
						<GoBackIcon className=" mr-3 h-6 w-6 text-accentColor group-hover:text-primaryColor" />
					}
				/>
			</div>
		</div>
	);
};

TutorialModal.propTypes = {};

export default TutorialModal;
