import { useSetAtom } from 'jotai';
import { backModalAtom } from '../../libs/atoms';
import BtnPrimary from '../btnComponents/BtnPrimary';

const NoUserBackBtn = () => {
	const setBackModal = useSetAtom(backModalAtom);

	const handleGoBack = () => {
		setBackModal(true);
	};

	return (
		<div className=" mx-auto w-3/4 max-w-md px-4 text-center">
			<BtnPrimary
				btnText="Back to Menu"
				btnFunction={handleGoBack}
				btnStyles="bg-slate-300 hover:bg-opacity-40"
			/>
		</div>
	);
};

export default NoUserBackBtn;
