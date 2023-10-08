import { Link } from 'react-router-dom';

const BtnMenu = () => {
	return (
		<div className=" m-auto my-4 w-1/2 max-w-md rounded-md border-2 bg-slate-300 text-center transition-all hover:bg-opacity-70">
			<Link
				to={'/'}
				className=" mx-auto block w-full cursor-pointer p-2 text-lg font-bold uppercase text-gray-900"
			>
				Menu
			</Link>
		</div>
	);
};

export default BtnMenu;
