import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import wait from '../../scripts/wait';
import { useAtom } from 'jotai';
import { roundStateAtom } from '../../libs/atoms';

const RoundResultModal = ({ result }) => {
	const [resultState, setResult] = useAtom(roundStateAtom);

	const resultDisplay = useCallback(async () => {
		if (resultState) {
			await wait(2000);
			setResult(false);
		}
	}, [resultState]); // eslint-disable-line

	useEffect(() => {
		resultDisplay();
	}, [resultDisplay]);

	return (
		<div className=" absolute grid h-full w-full grid-rows-6 items-center">
			<div className=" row-span-6 w-full">
				<div className=" mx-auto h-full w-3/4 gap-4 rounded-sm bg-slate-500 p-2 shadow-lg">
					<p className=" text-lg font-bold uppercase">{result}</p>
				</div>
			</div>
		</div>
	);
};

RoundResultModal.propTypes = {
	result: PropTypes.string,
};

export default RoundResultModal;
