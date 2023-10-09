import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';
import AboutContent from './components/AboutContent';

const About = () => {
	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col justify-center text-center">
			<TitlePage titleText="About" />

			<div className=" mx-auto w-full">
				<div className=" m-auto flex max-h-[30rem] w-3/4 flex-col gap-4 overflow-y-auto rounded-md bg-slate-300 p-5">
					<AboutContent />
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default About;
