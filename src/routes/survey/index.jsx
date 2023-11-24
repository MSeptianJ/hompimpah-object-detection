import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import SurveyContent from './components/SurveyContent';

const Survey = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="App Survey" />

			<div className=" row-span-4 mx-auto grid h-full w-3/4 grid-rows-5 items-start rounded-sm bg-slate-300 p-6">
				<SurveyContent />
			</div>

			<BtnMenu />
		</div>
	);
};

export default Survey;
