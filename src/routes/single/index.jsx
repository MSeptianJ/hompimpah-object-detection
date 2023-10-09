import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';
import SingleContent from './components/SingleContent';

const Single = () => {
	const P1Choise = 0;
	const P2Choise = 2;
	const P1Score = 0;
	const P2Score = 3;

	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col items-center justify-around text-center">
			<TitlePage titleText="Single Player" />

			<div className=" mx-auto w-full">
				<div className=" m-auto max-h-[30rem] w-3/4 gap-4 rounded-md bg-slate-300 p-6">
					<SingleContent
						P1Choise={P1Choise}
						P1Score={P1Score}
						P2Choise={P2Choise}
						P2Score={P2Score}
					/>
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Single;
