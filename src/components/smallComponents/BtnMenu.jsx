import { Link } from 'react-router-dom';
import BtnPrimary from './BtnPrimary';

const BtnMenu = () => {
	return (
		<div className=" mx-auto w-1/2 ">
			<Link to={'/'} className="text-gray-900">
				<BtnPrimary text="Back" btnStyles="bg-slate-300 hover:bg-opacity-70" />
			</Link>
		</div>
	);
};

export default BtnMenu;
