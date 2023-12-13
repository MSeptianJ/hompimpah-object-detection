import BtnBackToMenu from '../../components/btnComponents/BtnBackToMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import AboutContent from './components/AboutContent';

const About = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="About" />

			<div className="z-0 row-span-4 mx-auto grid h-full w-3/4 gap-4 overflow-y-auto rounded-sm bg-primaryColor p-6 text-backColor shadow-lg">
				<AboutContent />
			</div>

			<BtnBackToMenu />
		</div>
	);
};

export default About;
