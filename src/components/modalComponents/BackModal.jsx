import { useAtom } from 'jotai';
import { backConfirmAtom } from '../../libs/atoms';
import TitlePage from '../smallComponents/TitlePage';

const BackConfirmation = () => {
	const [back, setBack] = useAtom(backConfirmAtom);

	const handle = () => {
		setBack(!back);
	};

	const goBack = () => {
		history.back();
		setBack(!back);
	};

	return (
		<div className=" absolute flex h-full w-full flex-col items-center justify-around gap-5 backdrop-blur-sm">
			<TitlePage titleText="Hompimpah" />

			<div className=" mx-auto w-full">
				<div className=" mx-auto max-h-[25rem] w-3/4 gap-4 rounded-md bg-slate-500 p-6 shadow-lg">
					<p>Apakah benar anda ingin keluar dari permainan?</p>
				</div>
			</div>

			<div className=" mx-auto flex w-full max-w-md items-center justify-around text-center">
				<button
					className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
					onClick={goBack}
				>
					Yes
				</button>
				<button
					className=" block w-1/5 rounded-md bg-slate-500 p-3 text-sm font-bold uppercase transition-all hover:bg-gray-700"
					onClick={handle}
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

BackConfirmation.propTypes = {};

export default BackConfirmation;
