import { useAtom } from 'jotai';
import { backConfirmAtom } from '../libs/atoms';

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
		<div className=" absolute flex h-full w-full items-center justify-center backdrop-blur-sm">
			<div className="w-9/12 rounded-md bg-slate-400 p-3 shadow-lg">
				<div className=" mb-3">
					<p>Apakah anda benar ingin kembali ke menu awal?</p>
				</div>
				<div className=" flex w-full items-center justify-evenly">
					<button
						onClick={goBack}
						className=" w-1/3 rounded-sm bg-slate-300 p-1 text-sm hover:bg-opacity-50"
					>
						Yes
					</button>
					<button
						onClick={handle}
						className=" w-1/3 rounded-sm bg-slate-300 p-1 text-sm hover:bg-opacity-50"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

BackConfirmation.propTypes = {};

export default BackConfirmation;
