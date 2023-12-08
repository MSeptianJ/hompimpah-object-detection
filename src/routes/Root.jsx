import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className=" mx-auto min-h-screen w-full bg-slate-600">
			<div className="relative m-auto h-full w-full max-w-lg text-center">
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
