import BtnBackToMenu from '../../components/btnComponents/BtnBackToMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import TutorialText from '../../components/smallComponents/TutorialText';

const Tutorial = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="Tutorial" />

			<div className="z-0 row-span-4 mx-auto grid h-full w-3/4 gap-4 overflow-y-auto rounded-[4px] bg-primaryColor p-6 text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)]">
				<TutorialText />
			</div>

			<BtnBackToMenu />
		</div>
	);
};

export default Tutorial;
