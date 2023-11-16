import { useAtom, useSetAtom } from 'jotai';
import { Link } from 'react-router-dom';
import LOGOILUST from '../../assets/img/logo-Ilust.svg';
import BtnPrimary from '../../components/smallComponents/BtnPrimary';
import {
	gamePlayedStateAtom,
	plsAddGameStateAtom,
	userUIDAtom,
} from '../../libs/atoms';
import { AuthSignIn } from '../../libs/firebase/FirebaseAuth';
import BtnList from './components/BtnList';

const Start = () => {
	const [userUID, setUserUID] = useAtom(userUIDAtom);
	const setPlsAddGameState = useSetAtom(plsAddGameStateAtom);
	const [gamePlayedState] = useAtom(gamePlayedStateAtom);

	const textMenus = [
		{
			url: '/single',
			text: 'Rock Paper Scissors (Single)',
			func: async () => {
				if (!userUID) {
					const currentUID = await AuthSignIn();
					setUserUID(currentUID);

					setPlsAddGameState(true);
				}
			},
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
			<div className=" w-full p-4">
				<img
					className=" m-auto w-3/4 max-w-xs"
					src={LOGOILUST}
					alt="Logo Hompimpah"
				/>
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
						<div className=" relative">
							<Link to="/survey">
								<BtnPrimary
									btnText="App Survey"
									btnStyles={
										gamePlayedState
											? 'bg-slate-300 text-slate-700 cursor-pointer hover:bg-blue-500'
											: 'bg-slate-600 text-slate-300 cursor-pointer hover:bg-slate-500'
									}
									btnDisabled={gamePlayedState ? false : true}
								/>
							</Link>
							{gamePlayedState && (
								<span className="absolute -right-2 -top-2 flex aspect-square w-5">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
									<span className="relative m-auto inline-flex aspect-square w-4 rounded-full bg-blue-500"></span>
								</span>
							)}
						</div>
						<div className=" cursor-pointer"></div>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Start;
