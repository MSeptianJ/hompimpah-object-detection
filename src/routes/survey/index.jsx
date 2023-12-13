import BtnBackToMenu from '../../components/btnComponents/BtnBackToMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import SurveyContent from './components/SurveyContent';

const Survey = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="App Survey" />

			<div className=" z-0 row-span-4 mx-auto grid h-full w-3/4 grid-rows-6 items-center overflow-y-auto rounded-sm bg-primaryColor p-6 shadow-lg shadow-[rgba(0,0,0,0.3)]">
				<SurveyContent />
			</div>

			<BtnBackToMenu />
		</div>
	);
};

export default Survey;
