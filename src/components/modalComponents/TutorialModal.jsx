import { useSetAtom } from 'jotai';
import { tutorModalAtom } from '../../libs/atoms';
import { GoBackIcon } from '../../libs/icons';
import BtnPrimary from '../btnComponents/BtnPrimary';
import TitlePage from '../smallComponents/TitlePage';
import TutorialText from '../smallComponents/TutorialText';

const TutorialModal = () => {
	const setTutorModal = useSetAtom(tutorModalAtom);

	const handle = () => {
		setTutorModal(false);
	};

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center bg-slate-600">
			<TitlePage titleText="Tutorial" />

			<div className=" row-span-4 h-full w-full">
				<div className=" mx-auto flex h-full w-3/4 flex-col gap-4 overflow-y-auto rounded-sm bg-slate-500 p-6 shadow-lg">
					<TutorialText />
				</div>
			</div>

			<div className="mx-auto w-1/2 max-w-md text-center">
				<BtnPrimary
					btnIcon={<GoBackIcon cls="w-full text-lg scale-150" />}
					btnFunction={handle}
					btnStyles="bg-slate-500 hover:bg-gray-700 "
				/>
			</div>
		</div>
	);
};

TutorialModal.propTypes = {};

export default TutorialModal;
