import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';
import TutorialContent from './components/TutorialContent';

const Tutorial = () => {
	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col justify-center text-center">
			<TitlePage titleText="Tutorial" />

			<div className=" mx-auto w-full ">
				<div className=" m-auto flex max-h-[30rem] w-3/4 flex-col gap-4 overflow-y-auto rounded-md bg-slate-300 p-5">
					<TutorialContent />
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Tutorial;
