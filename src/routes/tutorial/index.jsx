import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import TutorialContent from './components/TutorialContent';

const Tutorial = () => {
	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col justify-around text-center">
			<TitlePage titleText="Tutorial" />

			<div className=" mx-auto w-full ">
				<div className=" m-auto flex max-h-[30rem] w-3/4 flex-col gap-4 overflow-y-auto rounded-md bg-slate-300 p-6">
					<TutorialContent />
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Tutorial;
