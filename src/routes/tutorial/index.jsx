import BtnBackToMenu from '../../components/btnComponents/BtnBackToMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import TutorialContent from './components/TutorialContent';

const Tutorial = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="Tutorial" />

			<div className=" row-span-4 h-full w-full ">
				<div className=" mx-auto flex h-full w-3/4 flex-col gap-4 overflow-y-auto rounded-sm bg-slate-300 p-6 shadow-lg">
					<TutorialContent />
				</div>
			</div>

			<BtnBackToMenu />
		</div>
	);
};

export default Tutorial;
