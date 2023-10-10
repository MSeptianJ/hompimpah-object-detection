import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className=" mx-auto min-h-screen w-full bg-gray-400">
			<div className="relative m-auto h-full w-full max-w-lg bg-slate-600 text-center">
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
