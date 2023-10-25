import useGetUser from '../../hooks/useGetUser';
import SignIn from '../../scripts/auth';
import BtnList from './components/BtnList';

const Start = () => {
	const userData = useGetUser();

	const textMenus = [
		{
			url: '/single',
			text: 'Single Player',
			func: () => {
				SignIn(userData);
			},
		},
		{
			url: '/multi',
			text: 'Multi Player',
		},
		{
			url: '/tutorial',
			text: 'Tutorial',
		},
		{
			url: '/about',
			text: 'About',
		},
	];

	return (
		<div className="m-auto flex min-h-screen w-full flex-col justify-center text-center">
			<div className=" w-full p-4 text-center text-red-400">
				<h1 className=" text-4xl font-bold uppercase">HOMPIMPAH</h1>
			</div>

			<div className=" w-full p-4">
				<div className=" m-auto w-3/4">
					<ul className=" w-full">
						{textMenus.map((textMenu, i) => (
							<BtnList
								key={i}
								url={textMenu.url}
								text={textMenu.text}
								func={textMenu.func}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Start;
