import { useRouteError } from 'react-router-dom';
import BtnBackToMenu from '../../components/btnComponents/BtnBackToMenu';
import TitlePage from '../../components/smallComponents/TitlePage';

const ErrorPage = () => {
	const errorData = useRouteError();

	console.log(errorData.message);

	return (
		<div className="grid max-h-screen min-h-screen w-full grid-rows-6 items-center text-center">
			<TitlePage titleText="Error" />

			<div className="z-0 row-span-4 mx-auto grid w-3/4 gap-4 overflow-y-auto rounded-sm bg-primaryColor p-6 text-backColor shadow-lg shadow-[rgba(0,0,0,0.3)]">
				<h4 className=" mb-3 w-full text-xl font-bold text-red-600">Error</h4>
				<p>{errorData.message}</p>
			</div>

			<BtnBackToMenu />
		</div>
	);
};

export default ErrorPage;
