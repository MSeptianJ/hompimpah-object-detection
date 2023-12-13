import { Link } from 'react-router-dom';
import { GoBackIcon } from '../../libs/icons';
import BtnPrimary from './BtnPrimary';

const BtnBackToMenu = () => {
	return (
		<div className=" group relative mx-auto rounded-md bg-primaryColor text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)] transition-colors duration-300 hover:bg-accentColor ">
			<Link to={'/'}>
				<BtnPrimary
					btnText="Menu"
					btnStyles=" w-full p-3 flex items-center"
					btnIcon={
						<GoBackIcon className=" mr-3 h-6 w-6 text-accentColor group-hover:text-primaryColor" />
					}
				/>
			</Link>
		</div>
	);
};

export default BtnBackToMenu;
