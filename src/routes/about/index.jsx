import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';
import AboutContent from './components/AboutContent';

const About = () => {
	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col justify-around text-center">
			<TitlePage titleText="About" />

			<div className=" mx-auto w-full">
				<div className=" m-auto flex max-h-[30rem] w-3/4 flex-col gap-4 overflow-y-auto rounded-md bg-slate-300 p-6">
					<AboutContent />
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default About;
