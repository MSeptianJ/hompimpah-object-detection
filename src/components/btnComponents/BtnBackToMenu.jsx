import { Link } from 'react-router-dom';
import { GoBackIcon } from '../../libs/icons';
import BtnPrimary from './BtnPrimary';

const BtnBackToMenu = () => {
	return (
		<div className=" mx-auto w-1/2 ">
			<Link to={'/'} className="text-gray-900">
				<BtnPrimary
					btnIcon={<GoBackIcon cls="w-full text-lg scale-150" />}
					btnStyles="bg-slate-300 hover:bg-opacity-70 text-slate-600"
				/>
			</Link>
		</div>
	);
};

export default BtnBackToMenu;
