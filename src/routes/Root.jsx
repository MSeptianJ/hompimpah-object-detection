import { Outlet } from 'react-router-dom';
import Boxes from '../components/smallComponents/Boxes';

const Root = () => {
	return (
		<div className=" mx-auto min-h-screen w-full bg-backColor">
			<div className="relative m-auto h-full w-full max-w-lg text-center">
				<Boxes />
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
