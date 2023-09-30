import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';

const Multi = () => {
	return (
		<div className="m-auto flex w-full flex-col justify-center text-center">
			<TitlePage titleText="Multi Player" />

			<div className=" mx-auto w-full">
				<div className=" m-auto w-3/4 rounded-md bg-slate-300 p-5"></div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Multi;
