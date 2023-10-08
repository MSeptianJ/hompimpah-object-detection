import BtnMenu from '../../components/BtnMenu';
import TitlePage from '../../components/TitlePage';
import Choices from './components/choices';
import Scores from './components/Scores';

const Single = () => {
	const P1Choise = 0;
	const P2Choise = 2;
	const P1Score = 0;
	const P2Score = 3;

	return (
		<div className="m-auto flex max-h-screen min-h-screen w-full flex-col items-center justify-evenly text-center">
			<TitlePage titleText="Single Player" />

			<div className=" mx-auto w-full">
				<div className=" m-auto w-3/4 rounded-md bg-slate-300 p-6">
					<div className=" mx-auto mb-4">
						<div className=" mb-2 flex w-full items-center justify-between">
							<p className=" text-sm font-bold">You</p>
							<div className=" flex items-center gap-2">
								<Scores score={P1Score} />
							</div>
						</div>
						<div className=" mx-auto flex min-h-[250px] w-full flex-col items-center justify-center rounded-md border-2 border-slate-800">
							<Choices choice={P1Choise} />
						</div>
					</div>

					<div className=" mx-auto">
						<div className=" mb-2 flex w-full items-center justify-between">
							<p className=" text-sm font-bold">Computer</p>
							<div className=" flex items-center gap-2">
								<Scores score={P2Score} />
							</div>
						</div>
						<div className=" mx-auto flex min-h-[250px] w-full flex-col items-center justify-center rounded-md border-2 border-slate-800">
							<Choices choice={P2Choise} />
						</div>
					</div>

					<div></div>
				</div>
			</div>

			<BtnMenu />
		</div>
	);
};

export default Single;
