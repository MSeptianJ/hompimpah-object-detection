import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';

const Tutorial = () => {
	return (
		<div className="m-auto flex w-full flex-col justify-center text-center">
			<TitlePage titleText="Tutorial" />

			<div className=" mx-auto w-full">
				<div className=" m-auto w-3/4 rounded-md bg-slate-300 p-5"></div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Tutorial;
