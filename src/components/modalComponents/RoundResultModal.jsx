import { useAtom } from 'jotai';
import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'react';
import { roundEndModalAtom } from '../../libs/atoms';
import wait from '../../scripts/wait';

const RoundResultModal = ({ result }) => {
	const [roundEndModal, setRoundEndModal] = useAtom(roundEndModalAtom);

	const resultDisplay = useCallback(async () => {
		if (roundEndModal) {
			await wait(1000);

			setRoundEndModal(false);
		}
	}, [roundEndModal]); // eslint-disable-line

	useEffect(() => {
		resultDisplay();
	}, [resultDisplay]);

	return (
		<div className=" absolute grid h-full w-full items-center justify-items-center">
			<div className=" mx-auto w-3/4 rounded-[4px] bg-accentColor p-2 text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)]">
				<p className=" text-lg font-bold uppercase">{result}</p>
			</div>
		</div>
	);
};

RoundResultModal.propTypes = {
	result: PropTypes.string,
};

export default RoundResultModal;
