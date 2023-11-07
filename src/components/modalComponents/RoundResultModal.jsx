import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { roundEndModalAtom } from '../../libs/atoms';
import wait from '../../scripts/wait';

const RoundResultModal = ({ result }) => {
	const [roundEndModal, setRoundEndModal] = useAtom(roundEndModalAtom);

	const resultDisplay = useCallback(async () => {
		if (roundEndModal) {
			await wait(2000);

			setRoundEndModal(false);
		}
	}, [roundEndModal]); // eslint-disable-line

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
