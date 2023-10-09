import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';
import MultiContent from './components/MultiContent';

const Multi = () => {
	const P1Choise = 2;
	const P2Choise = 1;
	const P1Score = 1;
	const P2Score = 2;

	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col items-center justify-around text-center">
			<TitlePage titleText="Multi Player" />

			<div className=" mx-auto w-full">
				<div className=" m-auto max-h-[30rem] w-3/4 gap-4 rounded-md bg-slate-300 p-6">
					<MultiContent
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

export default Multi;
