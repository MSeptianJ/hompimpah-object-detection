import BtnMenu from '../../components/smallComponents/BtnMenu';
import TitlePage from '../../components/smallComponents/TitlePage';

const Survey = () => {
	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="App Survey" />

			<div className=" row-span-4 h-full w-full ">
				<div className=" mx-auto flex h-full w-3/4 flex-col gap-4 overflow-y-auto rounded-sm bg-slate-300 p-6 shadow-lg">
					<h2>Survey</h2>
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Survey;