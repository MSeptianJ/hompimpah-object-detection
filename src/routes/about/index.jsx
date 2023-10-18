import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import AboutContent from './components/AboutContent';

const About = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="About" />

			<div className=" row-span-4 h-full w-full">
				<div className=" mx-auto flex h-full w-3/4 flex-col gap-4 overflow-y-auto rounded-sm bg-slate-300 p-6">
					<AboutContent />
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default About;
